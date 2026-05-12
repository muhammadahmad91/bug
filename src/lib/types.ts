export type BugSeverity = "low" | "medium" | "high";

export type BugStatus = "open" | "fixed";

export type Bug = {
  id: string;
  title: string;
  description: string;
  severity: BugSeverity;
  status: BugStatus;
  createdAt?: number;
};