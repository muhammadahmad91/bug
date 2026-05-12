"use client";

import { useState } from "react";
import { useBugStore } from "@/lib/store";
import type { BugSeverity, BugStatus } from "@/lib/types";

export default function FilterBar() {
  const bugs = useBugStore((s) => s.bugs);

  const [statusFilter, setStatusFilter] = useState<BugStatus | "all">("all");
  const [severityFilter, setSeverityFilter] = useState<BugSeverity | "all">("all");

  const filtered = bugs.filter((bug) => {
    const statusMatch =
      statusFilter === "all" || bug.status === statusFilter;

    const severityMatch =
      severityFilter === "all" || bug.severity === severityFilter;

    return statusMatch && severityMatch;
  });

  return (
    <div className="mb-4 space-y-3">

      {/* 🔘 FILTER CONTROLS */}
      <div className="flex gap-3 flex-wrap">

        {/* STATUS FILTER */}
        <select
          className="bg-zinc-800 p-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
        >
          <option value="all">All Status</option>
          <option value="open">Open</option>
          <option value="fixed">Fixed</option>
        </select>

        {/* SEVERITY FILTER */}
        <select
          className="bg-zinc-800 p-2 rounded"
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value as any)}
        >
          <option value="all">All Severity</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

      </div>

      {/* 📊 SUMMARY */}
      <p className="text-sm text-zinc-400">
        Showing <span className="text-white">{filtered.length}</span> bugs
      </p>

    </div>
  );
}