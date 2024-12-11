const express = require("express");
const router = express.Router();
const { callGPT4API } = require("../services/aiService");

router.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const response = await callGPT4API(prompt);
    res.json({ output: response });
  } catch (error) {
    console.error("AI generation error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

module.exports = router;
