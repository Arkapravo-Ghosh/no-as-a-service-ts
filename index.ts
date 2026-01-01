import express from "express";
import cors from "cors";
import reasons from "./reasons.json";

const app = express();
app.use(cors());
app.set("trust proxy", true);
const PORT = Number(process.env.PORT) || 3000;

// Random rejection reason endpoint
app.get("/no", (req, res) => {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  res.json({ reason });
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service is running on port ${PORT}`);
});
