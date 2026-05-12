"use client";

import { useBugStore } from "@/lib/store";
import BugCard from "./BugCard";

export default function BugList() {
  const bugs = useBugStore((s) => s.bugs);

  return (
    <div className="space-y-3">
      {bugs.length === 0 && (
        <p className="text-zinc-400">No bugs found</p>
      )}

      {bugs.map((bug) => (
        <BugCard key={bug.id} bug={bug} />
      ))}
    </div>
  );
}