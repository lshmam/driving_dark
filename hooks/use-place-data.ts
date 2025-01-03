"use client";

import { useState, useEffect } from 'react';

interface PlaceData {
  title: string;
  totalScore: number;
  reviewsCount: number;
  imageUrl: string;
  placeId: string;
}

export function usePlaceData() {
  const [placeData, setPlaceData] = useState<PlaceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlaceData() {
      try {
        const response = await fetch('/api/place');
        if (!response.ok) throw new Error('Failed to fetch place data');
        const data = await response.json();
        setPlaceData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch place data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlaceData();
  }, []);

  return { placeData, isLoading, error };
}