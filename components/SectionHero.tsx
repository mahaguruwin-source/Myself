import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="sec1"
      className="min-h-screen flex items-center bg-white px-6 py-16 font-[family:var(--font-inter)] sm:px-8 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-14 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-3xl text-center lg:text-left">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
            👋 Hello, I'm
          </span>

          {/* Name */}
          <h1 className="mt-6 font-[family:var(--font-space)] text-4xl font-bold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
            Mahalakshmi{" "}
            <span className="text-zinc-500">G</span>
          </h1>

          {/* Role */}
          <h2 className="mt-4 font-[family:var(--font-space)] text-2xl font-semibold text-zinc-700 lg:text-3xl">
            Senior Web Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            I'm a Senior Web Developer with experience building responsive web
  applications using React, Next.js, TypeScript, and Tailwind CSS. Previously,
  I worked extensively with WordPress and Elementor, developing and maintaining
  multiple websites while ensuring performance, security, and a seamless user
  experience.
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "WordPress",
              "Elementor",
              "Node.js",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#sec2"
              className="rounded-full bg-black px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-zinc-800"
            >
              Explore Skills
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black px-7 py-3 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
             Let's Connect
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-6 lg:justify-start">
            <a
              href="#"
              className="transition-all duration-300 hover:-translate-y-1"
            >
            
            </a>

            <a
              href="https://www.linkedin.com/in/maha-lakshmi-g/"
              target="_blank"
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin
                size={24}
                className="text-zinc-500 hover:text-black"
              />
            </a>

            <a
              href="mailto:mahaguru63@gmail.com"
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <FaEnvelope
                size={24}
                className="text-zinc-500 hover:text-black"
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          {/* Background Circle */}
          <div className="absolute h-50 w-50 lg:h-80 lg:w-80 rounded-full bg-zinc-100 blur-3xl"></div>

          {/* Profile Image */}
          <div className="relative rounded-full border-4 border-black bg-white p-2 shadow-2xl transition-transform duration-500 hover:scale-105">
            <div className="relative h-32 w-32 overflow-hidden rounded-full lg:h-80 lg:w-80">
              <Image
                src="/images/maha-logo.png"
                alt="Mahalakshmi G"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}