"use client";

import { useState } from "react";
import { useBugStore } from "@/lib/store";

export default function BugForm() {
  const addBug = useBugStore((s) => s.addBug);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = () => {
    if (!title) return;

    addBug({
      id: Date.now().toString(),
      title,
      description: desc,
      severity: "medium",
      status: "open",
    });

    setTitle("");
    setDesc("");
  };

  return (
    <div className="p-4 bg-zinc-900 rounded-xl mb-4 space-y-2">

      <input
        className="w-full p-2 bg-zinc-800 rounded"
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-2 bg-zinc-800 rounded"
        placeholder="Bug description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button
        onClick={submit}
        className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
      >
        ➕ Add Bug
      </button>

    </div>
  );
}