import express from "express";
import fs from "node:fs/promises";

const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.send("Hello Line!");
  await fs.appendFile("logs/lineoa_webhook/webhook.log", "Hello Line\n");
});
router.post("/webhook", async function (req, res, next) {
  res.send(200);
  await fs.appendFile(
    "logs/lineoa_webhook/webhook.log",
    `${JSON.stringify(req.body)}\n`
  );
});

export default router;
