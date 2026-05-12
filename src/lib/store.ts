import { create } from "zustand";
import type { Bug } from "./types";

type Store = {
  bugs: Bug[];
  addBug: (bug: Bug) => void;
  toggleStatus: (id: string) => void;
};

export const useBugStore = create<Store>((set, get) => ({
  bugs: [],

  addBug: (bug) =>
    set((state) => ({
      bugs: [...state.bugs, bug],
    })),

  toggleStatus: (id) =>
    set((state) => ({
      bugs: state.bugs.map((b) =>
        b.id === id
          ? {
              ...b,
              status: b.status === "open" ? "fixed" : "open",
            }
          : b
      ),
    })),
}));