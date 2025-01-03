import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <Card className="bg-black border-zinc-800">
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
    </div>
    <CardHeader className="pt-6">
      <h3 className="text-xl font-medium text-white">{title}</h3>
    </CardHeader>
    <CardContent className="text-gray-400">
      <p>{description}</p>
    </CardContent>
    <CardFooter className="flex justify-center">
      <Button className="text-white hover:text-white hover:bg-zinc-800 p-3">
        Book Today
      </Button>
    </CardFooter>
  </Card>
);

const Features2 = () => {
  const resources = [
    {
      title: "Experienced Instructors",
      description:
        "Our instructors are certified by ICBC and the Canadian Government",
      imageSrc:
        "https://res.cloudinary.com/dy8zpplau/image/upload/f_auto,q_auto/pexels-pripicart-620335_1_g7jjds",
    },
    {
      title: "Wide Coverage",
      description: "We offer our services in Vancouver, Richmond and Burnaby",
      imageSrc:
        "https://res.cloudinary.com/dy8zpplau/image/upload/f_auto,q_auto/pexels-bylukemiller-29382005_kfbeck",
    },
    {
      title: "Lessons for all levels",
      description:
        "We provide driving lessons and knowledge test practice materials for Class 4,5 & 7",
      imageSrc:
        "https://res.cloudinary.com/dy8zpplau/image/upload/pexels-elina-sazonova-2705755_rdlcpk",
    },
  ];

  return (
    <section className="bg-black text-white py-8 p-14 pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-6xl font-medium">Why Choose Us?</h2>
          {/* <p className="text-xl max-w-2xl text-center">
            We offer top-notch driving instruction with a focus on safety,
            experience, and personalized learning.
          </p> */}
          <p className="text-gray-400">
            We offer top-notch driving instruction with a focus on safety,
            experience, and personalized learning.
            <br />
            We will help you every step along the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        {/* <div className="text-center">
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100"
          >
            Explore All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Features2;
