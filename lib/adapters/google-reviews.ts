import type { ReactGoogleReview } from "react-google-reviews";
import type { Review } from "@/types/review";

export function adaptGoogleReview(googleReview: ReactGoogleReview): Review {
  return {
    reviewId: googleReview.reviewId || null,
    reviewer: {
      profilePhotoUrl: googleReview.reviewer.profilePhotoUrl || "",
      displayName: googleReview.reviewer.displayName || "Anonymous",
      isAnonymous: googleReview.reviewer.isAnonymous,
    },
    starRating: googleReview.starRating || 0,
    comment: googleReview.comment || "",
    createTime: googleReview.createTime
      ? new Date(googleReview.createTime).toISOString()
      : null,
    updateTime: googleReview.updateTime
      ? new Date(googleReview.updateTime).toISOString()
      : null,
    reviewReply: googleReview.reviewReply
      ? {
          comment: googleReview.reviewReply.comment,
          updateTime: new Date(
            googleReview.reviewReply.updateTime
          ).toISOString(),
        }
      : null,
  };
}
