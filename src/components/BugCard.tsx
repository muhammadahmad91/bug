"use client";

import { useBugStore } from "@/lib/store";
import type { Bug } from "@/lib/types";

export default function BugCard({ bug }: { bug: Bug }) {
  const toggleStatus = useBugStore((state) => state.toggleStatus);

  return (
    <div className="p-4 bg-zinc-900 border border-zinc-700 rounded-lg">

      <h3 className="font-bold">{bug.title}</h3>
      <p className="text-sm text-zinc-400">{bug.description}</p>

      <p className="mt-2 text-xs">
        Status:{" "}
        <span className="text-blue-400">{bug.status}</span>
      </p>

      <button
        onClick={() => toggleStatus(bug.id)}
        className="mt-3 px-3 py-1 bg-green-600 rounded"
      >
        Toggle Status
      </button>

    </div>
  );
}