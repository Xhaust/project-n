import type { Job } from "../jobs/job.types"
import { sleep } from "../utils/sleep"

export async function processEcho(job: Job) {
  console.log(`[ECHO] start job ${job.id}`);

  await sleep(2000); // NOTE: simulates workload

  console.log(`[ECHO] payload: ${job.payload}`)

  console.log(`[ECHO] done job ${job.id}`);
}
