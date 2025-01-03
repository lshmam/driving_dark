import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular,
}) => (
  <Card className="relative bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col">
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-black" /> Most Popular
        </div>
      </div>
    )}
    <CardHeader className="text-center pb-8 relative">
      <h3 className="text-2xl font-medium text-white italic mb-4 font-serif">
        {title}
      </h3>
      <div className="text-white">
        <span className="text-5xl font-thin">${price}</span>
      </div>
    </CardHeader>
    <CardContent className="space-y-4 flex-grow">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
          <span className="text-gray-300 text-sm leading-relaxed">
            {feature}
          </span>
        </div>
      ))}
    </CardContent>
    <CardFooter className="pt-6 mt-auto">
      <Button
        className={`w-full py-6 text-sm font-medium transition-colors ${
          isPopular
            ? "bg-black text-white hover:border-white border border-zinc-800"
            : "bg-transparent border border-white text-white hover:bg-zinc-800"
        }`}
      >
        Get Started
      </Button>
    </CardFooter>
  </Card>
);

const Pricing2 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Basic",
      price: "85",
      features: [
        "1.5 hour lesson",
        "Practice material provided",
        "Ideal for beginners",
      ],
    },
    {
      title: "Standard",
      price: "110",
      features: [
        "2.5 hour lesson",
        "Practice material provided",
        "Ideal for most learners",
        "Flexible scheduling",
      ],
      isPopular: true,
    },
    {
      title: "Intensive",
      price: "550",
      features: [
        "10 hours of lessons",
        "Comprehensive practice materials",
        "Intensive learning program",
        "Priority scheduling",
        "Best value for quick progress",
      ],
    },
  ];

  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto p-16">
        <div className="flex flex-col items-center mb-16">
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-serif">
              Pricing <span className="italic">Options</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the perfect package for your learning journey.
              <br className="hidden md:block" />
              Flexible options to match your goals and schedule.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-[400px] md:max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={isYearly ? String(Number(plan.price) * 10) : plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
