"use client";

import { useEffect, useState } from 'react';
import type { Review } from '@/types/review';
import { adaptGoogleReview } from '@/lib/adapters/google-reviews';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) throw new Error('Failed to fetch reviews');
        
        const data = await response.json();
        setReviews(data.map(adaptGoogleReview));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch reviews');
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return { reviews, isLoading, error };
}