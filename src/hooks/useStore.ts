import { createContext, useContext } from "react";
import { IRootState } from "../types";

export const RootStoreContext = createContext<IRootState | null>(null);

export function useStore<T>(callback: (state: IRootState) => T): T {
  const context = useContext(RootStoreContext)
  if (!context) {
    throw new Error("no context")
  }
  return callback(context)
}