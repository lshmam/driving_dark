"use client";

import { ReviewList } from "@/components/reviews/review-list";
import { useReviews } from "@/hooks/use-reviews";
import { Card } from "@/components/ui/card";

export default function ReviewsPage() {
  const { reviews, isLoading, error } = useReviews();

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 bg-black">
        <h1 className="mb-8 text-3xl font-bold">Customer Reviews</h1>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-24 bg-muted rounded" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 bg-black">
        <h1 className="mb-8 text-3xl font-bold">Customer Reviews</h1>
        <Card className="p-6">
          <p className="text-destructive">Failed to load reviews</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 bg-black">
      <h1 className="mb-8 text-3xl font-bold">Customer Reviews</h1>
      <ReviewList reviews={reviews} />
    </div>
  );
}
