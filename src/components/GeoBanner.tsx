"use client";

import { useEffect, useState } from "react";

type Geo = {
  city: string | null;
  region: string | null;
  country_name: string | null;
};

export default function GeoBanner() {
  const [geo, setGeo] = useState<Geo | null>(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let canceled = false;
    (async () => {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as Geo;
        if (!canceled) setGeo(data);
      } catch (e) {
        // ignore
      }
    })();
    return () => {
      canceled = true;
    };
  }, []);

  if (hide) return null;

  const place = geo?.city || geo?.region || geo?.country_name;
  if (!place) return null;

  return (
    <div className="w-full bg-red-700 text-white text-center text-xs sm:text-sm py-2 px-3">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
        <span>
          Pessoas da sua região de {place} estão comprando este produto neste exato momento
        </span>
        <button
          aria-label="Fechar aviso"
          className="text-white/80 hover:text-white text-xs"
          onClick={() => setHide(true)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
