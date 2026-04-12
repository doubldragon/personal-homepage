import type { ReactNode } from "react";

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="text-md font-medium px-2.5 py-1 rounded-full bg-theme-border text-theme-muted">
    {children}
  </span>
);

export default Pill;
