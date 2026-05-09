export type JobStatus =
  | "PENDING"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"

export type Job = {
  id: string;
  type: string;
  payload: unknown;
  status: JobStatus;
  createdAt: Date;
}
