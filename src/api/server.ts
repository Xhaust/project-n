import express from "express";

const server = express();

server.use(express.json());

server.get("/health", (_req, res) => {
  res.json({status: "ok"});
});

export default server;
