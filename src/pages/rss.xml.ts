import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: "小杨王子 · 水墨博客",
    description: "寄蜉蝣于天地，渺沧海之一粟 — 小杨王子的水墨博客",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: "/blog/" + post.slug,
    })),
    customData: "<language>zh-CN</language>",
  });
}
