import { Review } from "@/types/review";
import { ReviewCard } from "./review-card";

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.reviewId || review.createTime} review={review} />
      ))}
    </div>
  );
}