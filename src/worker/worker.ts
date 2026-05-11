import type { Job } from "../jobs/job.types";
import { getJobs, updateJob } from "../jobs/job.store";

function sleep (ms: number) {
  return new Promise ((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function processJob(job: Job) {
  console.log(`Processing job: ${job.id}`);

  updateJob(job.id, {status: "PROCESSING"});

  await sleep(2000); // NOTE: simulates workload

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
