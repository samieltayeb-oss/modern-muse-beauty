"use client";

import { ReactLenis as Lenis } from "lenis/react";

export default function ReactLenis({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return <Lenis {...props}>{children}</Lenis>;
}
