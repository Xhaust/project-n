import express from "express";
import type { Job } from "@/jobs/job.types";
import { addJob } from "@/jobs/job.store";

const server = express();

server.use(express.json());

server.get("/health", (_req, res) => {
  res.json({status: "ok"});
});

server.post("/jobs", (req, res) => {
  const {type, payload} = req.body;

  const job: Job = {
   id: crypto.randomUUID(),
   type,
   payload,
   status: "PENDING",
   createdAt: new Date()
  }

  addJob(job);

  return res.status(201).json(job);
})

export default server;
