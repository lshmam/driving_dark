"use client";

import { ReviewsSection } from "@/components/reviews/reviews-section";
import Hero3 from "@/components/Hero3";
import Features2 from "@/components/Features2";
import Pricing2 from "@/components/Pricing2";
import CTA2 from "@/components/CTA2";
import { Footer } from "@/components/Footer";
import Features3 from "@/components/Features3";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero3 />
        <Features3 />
        <Pricing2 />
        <ReviewsSection className="bg-muted" />
        <CTA2 />
      </main>
      <Footer />
    </div>
  );
}
