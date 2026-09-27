"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

function subscribe(onStoreChange: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener("change", onStoreChange);
  return () => mql.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function getServerSnapshot() {
  return true;
}

/**
 * True below Tailwind `md` (767px).
 * Until the client has mounted, returns true so we never SSR/hydrate a
 * desktop-only `<video>` (avoids mismatch + accidental mobile downloads).
 */
export function useIsMobile() {
  const [mounted, setMounted] = useState(false);
  const matches = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return true;
  return matches;
}
