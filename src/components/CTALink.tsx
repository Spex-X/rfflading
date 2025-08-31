"use client";

import React from "react";

declare global {
  interface Window {
    fbq?: any;
  }
}

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName?: string; // default: 'InitiateCheckout'
  eventParams?: Record<string, any>;
};

export default function CTALink({ eventName = "InitiateCheckout", eventParams = {}, onClick, ...rest }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    try {
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", eventName, eventParams);
      }
    } catch (err) {
      // fail safe: do nothing
    }
    if (onClick) onClick(e);
  };

  return <a {...rest} onClick={handleClick} />;
}
