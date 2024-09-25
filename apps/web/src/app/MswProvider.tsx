"use client";

import { useEffect, useState } from "react";

export function MswProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    async function initMsw() {
      if (process.env.NODE_ENV === "development") {
        const { initMocks } = await import("@repo/msw");
        await initMocks();
        setMswReady(true);
      } else {
        setMswReady(true);
      }
    }

    initMsw();
  }, []);

  if (!mswReady) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
