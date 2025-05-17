import axios from "axios";

const API_KEY = `AIzaSyB_jfcNQx4OqLW1cfnJDWWywn9EWWjJ9OI`
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent";

export const reviewCode = async (code) => {
    try {

        const prompt = `
        🌟 **You are an AI code reviewer**. Review the following code in detail, checking for errors, optimizations, and best practices. 
        📚 **Focus on**: code structure, logic, security, performance optimizations, and readability.
        ✅ Provide feedback on any potential improvements and explain in a clear, easy-to-understand manner.
        🔍 **Be concise but thorough** and ensure the review is beginner-friendly.
        lease analyze the following code for errors, optimizations, and best practices. Highlight all code snippets using markdown syntax (jsx, js,html, etc.). Your review should be structured with clear sections.Make sure that the code you provide should be highlighted as sample is given:
        👨‍💻 **Code**:
        \`\`\`js
        ${code}
        \`\`\`
  
        ✨ **Feedback Format**: 
        1️⃣ **Issues Found**: Any bugs or errors.
        2️⃣ **Improvements**: Suggestions for better practices or performance.
        3️⃣ **Best Practices**: Things that were done well or could be improved.
        4️⃣ **Optimizations**: Areas where performance can be optimized.
        5️⃣ **Highlight**: Any code snippets should be highlighted as follows
                `
                // Your code snippet here
                function App(a, b) {
                    return a + b;
                }
                `
      `;
        
 
        const response = await axios.post(
            `${GEMINI_URL}?key=${API_KEY}`,
            {
                contents: [
                    {
                        role: "user",
                        parts: [{ text: prompt }],
                    },
                ],
            }
        );

        return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
    } catch (error) {
        console.error("API Error:", error?.response?.data || error.message);
        return `Error: ${error?.response?.data?.error?.message || "Failed to connect."}`;
    }
};
