import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { GoogleMap } from "./GoogleMap";

const CTA2 = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
          Ready to Get Started?
        </h1>
        {/* <h2 className="text-5xl font-medium mb-8 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
          Start tracking customers
        </h2> */}

        <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
          Book your first lesson today and take the first step towards becoming
          a confident driver.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-4">
          {/* <div className="relative flex-1 w-full max-w-md">
            <Input
              type="tel"
              placeholder="123-456-7890"
              className="w-full bg-transparent border-gray-700 text-white px-4 py-6 rounded-full"
            />
          </div> */}
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 rounded-full flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Give us a call
          </Button>
        </div>

        <p className="text-white text-lg">
          Or send us an email at{" "}
          <a
            href="mailto:easywaydriving@gmail.com"
            className="text-blue-500 hover:underline"
          >
            easywaydriving@gmail.com
          </a>
        </p>
      </div>
      <div className="mx-auto max-w-4xl h-[300px] mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <GoogleMap />
      </div>
    </section>
  );
};

export default CTA2;
