import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export function Packages() {
  const packages = [
    {
      name: "Basic",
      price: "$299",
      features: [
        "5 driving lessons",
        "Online theory course",
        "Practice test app access",
      ],
    },
    {
      name: "Standard",
      price: "$499",
      features: [
        "10 driving lessons",
        "Online theory course",
        "Practice test app access",
        "2 VR training sessions",
      ],
    },
    {
      name: "Premium",
      price: "$799",
      features: [
        "15 driving lessons",
        "Online theory course",
        "Practice test app access",
        "5 VR training sessions",
        "Personal instructor assignment",
      ],
    },
  ];

  return (
    <section id="packages" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Choose Your Package
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg"
              initial={{ scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <p className="text-4xl font-bold mb-6">{pkg.price}</p>
              <ul className="mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#get-started"
                className="block text-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors "
              >
                Select Package
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
