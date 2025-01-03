export interface ReviewReply {
  comment: string;
  updateTime: string;
}

export interface Reviewer {
  profilePhotoUrl: string;
  displayName: string;
  isAnonymous: boolean;
}

export interface Review {
  reviewId: string | null;
  reviewer: Reviewer;
  starRating: number;
  comment: string;
  createTime: string | null;
  updateTime: string | null;
  reviewReply?: ReviewReply | null;
}