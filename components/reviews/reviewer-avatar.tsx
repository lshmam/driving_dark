"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { Reviewer } from "@/types/review";

interface ReviewerAvatarProps {
  reviewer: Reviewer;
  className?: string;
}

export function ReviewerAvatar({ reviewer, className = "" }: ReviewerAvatarProps) {
  return (
    <Avatar className={className}>
      {reviewer.profilePhotoUrl ? (
        <AvatarImage 
          src={reviewer.profilePhotoUrl} 
          alt={reviewer.displayName}
          onError={(e) => {
            // If image fails to load, show fallback
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : null}
      <AvatarFallback>
        <User className="h-4 w-4" />
      </AvatarFallback>
    </Avatar>
  );
}