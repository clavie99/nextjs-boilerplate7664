"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

type AllowedValue = string | number | boolean | null;

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventData?: Record<string, AllowedValue>;
};

export default function TrackedLink({
  eventName,
  eventData,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    track(eventName, eventData);
    onClick?.(e);
  };

  return <a {...props} onClick={handleClick} />;
}
