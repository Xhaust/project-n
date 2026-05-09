import type { Job } from "./job.types.js";

const jobs: Job[] = [];

export function addJob(job: Job) {
  jobs.push(job);
}

export function getJobs() {
  return jobs;
}

export function getJobById(id: string) {
  return jobs.find((job) => job.id === id);
}
