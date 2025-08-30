"use client";

import { useEffect } from "react";

/**
 * Replicates UTM propagation from reiflickv5/index.html
 * - Appends ?utm_source=<value> to all links with class .cta_btn
 * - Adjusts WhatsApp button (.signin__button) onclick to include same UTM text
 */
export default function UTMBridge() {
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const params = url.searchParams;

      let utmSource = params.get("utm_source");
      if (!utmSource) {
        const first = params.entries().next();
        if (first && first.value) {
          utmSource = first.value[0];
        }
      }

      if (utmSource) {
        // Append utm_source to all purchase links
        const purchaseLinks = document.querySelectorAll<HTMLAnchorElement>(
          ".cta_btn"
        );
        purchaseLinks.forEach((link) => {
          try {
            const linkUrl = new URL(link.href, window.location.origin);
            linkUrl.searchParams.set("utm_source", utmSource as string);
            link.href = linkUrl.toString();
          } catch {
            // Ignore malformed hrefs
          }
        });

        // Update WhatsApp contact button
        const contactButton = document.querySelector<HTMLButtonElement | HTMLAnchorElement>(
          ".signin__button"
        );
        if (contactButton) {
          const message = encodeURIComponent(`Ola vim do ${utmSource}`);
          const waUrl = `https://wa.me/554391768151?text=${message}`;
          contactButton.setAttribute(
            "onclick",
            `window.location.href='${waUrl}';`
          );
        }
      }
    } catch (e) {
      // no-op
    }
  }, []);

  return null;
}
