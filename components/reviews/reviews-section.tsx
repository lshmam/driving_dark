"use client";

import { Card } from "@/components/ui/card";
import { Review } from "@/types/review";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useReviews } from "@/hooks/use-reviews";
import { usePlaceData } from "@/hooks/use-place-data";
import { ReviewCard2 } from "./review-card2";

interface ReviewsSectionProps {
  className?: string;
}

export function ReviewsSection({ className = "" }: ReviewsSectionProps) {
  const {
    reviews,
    isLoading: reviewsLoading,
    error: reviewsError,
  } = useReviews();
  const {
    placeData,
    isLoading: placeLoading,
    error: placeError,
  } = usePlaceData();
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID;
  const reviewLink = `https://www.google.com/maps/place/?q=place_id:${placeId}`;

  const featuredReviews = reviews.slice(0, 4);
  const isLoading = reviewsLoading || placeLoading;
  const error = reviewsError || placeError;

  const stats = [
    {
      title: "Overall Rating",
      value: placeData?.totalScore.toFixed(1) || "0.0",
      icon: Star,
    },
    {
      title: "Total Reviews",
      value: placeData?.reviewsCount || 0,
      icon: MessageCircle,
    },
  ];

  if (isLoading) {
    return (
      <section className={` bg-black py-12 ${className}`}>
        <div className="container mx-auto px-4 bg-stone-950">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <Card
                key={i}
                className="p-6 animate-pulse bg-black fill-zinc-800"
              >
                <div className="h-24 bg-muted rounded" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`bg-customBlack py-12 ${className}`}>
        <div className="container mx-auto px-4">
          <Card className="p-6">
            <p className="text-destructive">Failed to load reviews</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className={` w-full ${className}`}>
      <div className="container mx-auto px-4 md:px-8 bg-black min-h-screen">
        {" "}
        {/* Ensure this div has a minimum height */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear what our students have to say
            about their learning experience
          </p>
        </div>
        <div className="flex gap-8 mb-12 items-center justify-center flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900/80 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <stat.icon className="h-6 w-6 text-primary stroke-white stroke-2" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:border-white border border-zinc-800 font-medium px-6 py-6 h-auto text-base">
                Leave us a review on Google
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
            {featuredReviews.map((review) => (
              <div
                key={review.reviewId || review.createTime}
                className="transform transition-transform hover:-translate-y-1"
              >
                <ReviewCard2 review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
