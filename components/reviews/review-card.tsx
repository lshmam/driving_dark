"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Review } from "@/types/review";
import { StarRating } from "./star-rating";
import { ReviewerAvatar } from "./reviewer-avatar";
import { formatDate } from "@/lib/utils";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full max-w-lg ">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <ReviewerAvatar reviewer={review.reviewer} />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              {review.reviewer.isAnonymous ? "Anonymous" : review.reviewer.displayName}
            </h3>
            <StarRating rating={review.starRating} />
          </div>
          <p className="text-sm text-muted-foreground">
            {review.createTime && formatDate(new Date(review.createTime))}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-4">{review.comment}</p>
        {review.reviewReply && (
          <div className="mt-4 rounded-lg bg-muted p-4">
            <p className="text-sm font-semibold">Response:</p>
            <p className="mt-1 text-sm line-clamp-2">{review.reviewReply.comment}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {formatDate(new Date(review.reviewReply.updateTime))}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
