import type { Job } from "../jobs/job.types";
import { getJobs, updateJob } from "../jobs/job.store";
import { processEcho } from "../processors/echo.processor"

async function processJob(job: Job) {
  console.log(`Processing job: ${job.id}`);

  updateJob(job.id, {status: "PROCESSING"});

  switch (job.type) {
    case "test.echo" :
      await processEcho(job);
      break;

    default:
      throw new Error(`Unknown job type: ${job.type}`)
  }

  updateJob(job.id, {status: "COMPLETED"});

  console.log(`Job ${job.id} completed`)
}

function startWorker() {
  console.log("Worker started");

  setInterval(async () => {
    const jobs = getJobs();
    const pendingJobs = jobs.filter((job) => job.status === "PENDING");

    for (const job of pendingJobs) {
      await processJob(job);
    }
  }, 1000)
}

startWorker();
