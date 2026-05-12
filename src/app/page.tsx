"use client";

import BugForm from "../components/BugForm";
import BugList from "../components/BugList";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      
      <h1 className="text-3xl font-bold mb-6">
        🐞 Bug Hunter Dashboard
      </h1>

      <BugForm />
      <BugList />

    </div>
  );
}