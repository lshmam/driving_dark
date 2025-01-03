"use client";

import { useEffect, useRef } from "react";

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Clear any existing children to avoid duplicates
      mapRef.current.innerHTML = "";

      // Fetch the API key and Place ID from environment variables
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID;

      if (!apiKey || !placeId) {
        console.error(
          "Google Maps API key or Place ID is not defined in environment variables."
        );
        return;
      }

      const iframe = document.createElement("iframe");
      iframe.style.border = "0";
      iframe.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`;
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
