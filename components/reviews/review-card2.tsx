"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Review } from "@/types/review";
import { StarRating } from "./star-rating";
import { ReviewerAvatar } from "./reviewer-avatar";
import { formatDate } from "@/lib/utils";
import { MessageSquareQuote } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard2({ review }: ReviewCardProps) {
  return (
    <Card className="h-full max-w-lg border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:bg-zinc-900/80">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <ReviewerAvatar reviewer={review.reviewer} />
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-medium text-zinc-100">
              {review.reviewer.isAnonymous ? "Anonymous" : review.reviewer.displayName}
            </h3>
            <StarRating rating={review.starRating} />
          </div>
          <p className="text-sm text-zinc-400">
            {review.createTime && formatDate(new Date(review.createTime))}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <p className="pl-6 text-sm text-zinc-300 leading-relaxed line-clamp-4">
            {review.comment}
          </p>
        </div>
        
        {review.reviewReply && (
          <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-zinc-700" />
              <p className="text-sm font-medium text-zinc-200">Business Response</p>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed line-clamp-2">
              {review.reviewReply.comment}
            </p>
            <p className="text-xs text-zinc-500">
              {formatDate(new Date(review.reviewReply.updateTime))}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}