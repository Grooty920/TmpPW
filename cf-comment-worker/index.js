// Cloudflare Workers 评论区 - 使用 KV 存储
// 访客可输入名字留言，支持回复

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.json();
      const event = body.event || "";

      switch (event) {
        // 获取配置
        case "GET_CONFIG":
          return new Response(JSON.stringify({ data: { name: "小杨王子 · 笔墨留痕", version: "1.0.0" } }), { headers: corsHeaders });

        // 获取评论
        case "GET_COMMENTS": {
          const pageUrl = body.url || "/";
          const key = "comments:" + pageUrl;
          const data = await env.COMMENTS_KV.get(key, "json");
          return new Response(JSON.stringify({ data: data || [] }), { headers: corsHeaders });
        }

        // 发布评论
        case "POST_COMMENT": {
          const pageUrl = body.url || "/";
          const key = "comments:" + pageUrl;
          const existing = await env.COMMENTS_KV.get(key, "json") || [];
          const newComment = {
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            nick: (body.nick || "墨客").slice(0, 20),
            content: (body.content || "").slice(0, 500),
            created: new Date().toISOString(),
            comment: body.content || "",
          };
          existing.unshift(newComment);
          // 最多保留 100 条
          if (existing.length > 100) existing.length = 100;
          await env.COMMENTS_KV.put(key, JSON.stringify(existing));
          return new Response(JSON.stringify({ data: newComment }), { headers: corsHeaders });
        }

        // 获取最近评论（可选）
        case "GET_RECENT_COMMENTS": {
          // 列出所有评论键（受限于 KV 的 list 功能）
          const list = await env.COMMENTS_KV.list({ prefix: "comments:" });
          return new Response(JSON.stringify({ data: list.keys.length }), { headers: corsHeaders });
        }

        default:
          return new Response(JSON.stringify({ error: "Unknown event: " + event }), { status: 400, headers: corsHeaders });
      }
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: corsHeaders });
    }
  },
};
