import type { ReactGoogleReview } from "react-google-reviews";
import type { Review } from "@/types/review";

export function adaptGoogleReview(googleReview: ReactGoogleReview): Review {
  return {
    reviewId: googleReview.time?.toString() || null,
    reviewer: {
      profilePhotoUrl: googleReview.profile_photo_url || "",
      displayName: googleReview.author_name || "Anonymous",
      isAnonymous: !googleReview.author_name,
    },
    starRating: googleReview.rating || 0,
    comment: googleReview.text || "",
    createTime: googleReview.time ? new Date(googleReview.time * 1000).toISOString() : null,
    updateTime: null, // Google API doesn't provide update time
    reviewReply: null, // Handle review replies if available in your API
  };
}