const twikoo = require("twikoo-vercel");

module.exports = async (req, res) => {
  try {
    // 设置 CORS 头
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    
    if (req.method === "OPTIONS") {
      return res.status(204).end();
    }
    
    // 调用 twikoo-vercel 处理
    await twikoo(req, res);
  } catch (err) {
    console.error("Twikoo error:", err);
    res.status(500).json({ error: err.message });
  }
};