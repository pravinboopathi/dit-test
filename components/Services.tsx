"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

type Service = {
  title: string;
  description: string;
  technologies: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Delivering responsive and dynamic web development services using modern technologies to create engaging and efficient user experiences for all.",
    technologies: "React | Next.js | TypeScript",
    image: "/images/apps.png",
  },
  {
    title: "App Development",
    description:
      "Creating seamless and efficient mobile applications with intuitive user interfaces and robust performance for iOS and Android platforms.",
    technologies: "Flutter | React Native",
    image: "/images/mobile.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing aesthetically pleasing and user-friendly interfaces with a focus on enhancing usability and accessibility.",
    technologies: "Figma | Adobe XD",
    image: "/images/software.png",
  },
];

const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  return (
    <motion.div
      className="rounded-lg border-2 border-gray-100 p-6 bg-white "
   
    >
      <Image
        src={service.image}
        alt={`${service.title} icon`}
        width={96}
        height={96}
        className="mx-auto mb-4 rounded-lg object-cover"
        loading="lazy"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        {service.title}
      </h2>
      <p className="text-lg font-semibold text-gray-700 text-center mb-2">
        {service.technologies}
      </p>
      <p className="text-gray-600 text-center mb-6">{service.description}</p>
      <button
        className="  text-gray-950  border-2  border-gray-500 py-2 px-6 rounded-lg text-center justify-center flex mx-auto"
        aria-label={`Read more about ${service.title}`}
      >
        Read More
      </button>
    </motion.div>
  );
};

const Services: FC = () => {
  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Discover our range of services, including web development, app development, and UI/UX design." />
      </Head>
      <div className="bg-white text-black font-roboto  py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-5xl font-normal text-center mb-12 text-gray-900">
            Our Services.
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
