import type { ReactNode } from "react";
import { waLink } from "@/lib/constants";
import WaIcon from "@/components/WaIcon";

type Props = {
  /** Prefilled WhatsApp message (use the strings from lib/constants). */
  message: string;
  children: ReactNode;
  big?: boolean;
  className?: string;
};

/** The one coconut pill, the only primary action style on the site. */
export default function WhatsAppPill({ message, children, big = false, className = "" }: Props) {
  return (
    <a
      className={`pill${big ? " big" : ""}${className ? " " + className : ""}`}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WaIcon />
      {children}
    </a>
  );
}
