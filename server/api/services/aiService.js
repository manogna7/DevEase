const axios = require("axios");

const callGPT4API = async (prompt) => {
  const API_KEY = process.env.AI_API_KEY;
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const response = await axios.post(
    endpoint,
    {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};

module.exports = { callGPT4API };
