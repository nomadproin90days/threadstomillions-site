"use client";

import { useSyncExternalStore } from "react";

function getSearchParams() {
  if (typeof window === "undefined") return "";
  return window.location.search;
}

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

export function useSearchParams() {
  return useSyncExternalStore(subscribe, getSearchParams, () => "");
}
