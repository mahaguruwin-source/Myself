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
      className="min-h-screen flex items-center bg-white px-5 py-10 font-[family:var(--font-inter)] sm:px-8 lg:px-16 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-14">
        {/* Left Content */}
        <div className="max-w-3xl text-center lg:text-left">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 sm:px-4 sm:py-2 sm:text-sm">
            👋 Hello, I'm
          </span>

          {/* Name */}
          <h1 className="mt-4 font-[family:var(--font-space)] text-3xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:mt-6 lg:text-7xl">
            Mahalakshmi <span className="text-zinc-500">G</span>
          </h1>

          {/* Role */}
          <h2 className="mt-3 font-[family:var(--font-space)] text-lg font-semibold text-zinc-700 sm:text-xl lg:mt-4 lg:text-3xl">
            Senior Web Developer
          </h2>

         {/* Description */}
<p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg lg:mt-6 lg:leading-8">
  {/* Mobile */}
  <span className="block md:hidden">
    Building modern, fast, and accessible web experiences with React,
    Next.js, and TypeScript.
  </span>

  {/* Tablet & Desktop */}
  <span className="hidden md:block">
    I'm a Senior Web Developer with over 4 years of experience building
    responsive, high-performance web applications using React, Next.js,
    TypeScript, and Tailwind CSS. I also have extensive experience with
    WordPress and Elementor, creating scalable websites with clean UI,
    strong performance, and an excellent user experience.
  </span>
</p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:mt-8 lg:justify-start lg:gap-3">
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
                className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white sm:px-4 sm:py-2 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:mt-10 lg:justify-start lg:gap-4">
            <a
              href="#sec2"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-800 lg:px-7 lg:py-3"
            >
              Explore Skills
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white lg:px-7 lg:py-3"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-5 lg:mt-10 lg:justify-start lg:gap-6">
      

            <a
              href="https://www.linkedin.com/in/maha-lakshmi-g/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin
                size={22}
                className="text-zinc-500 hover:text-black"
              />
            </a>

            <a
              href="mailto:mahaguru63@gmail.com"
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <FaEnvelope
                size={22}
                className="text-zinc-500 hover:text-black"
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
     {/* Right Image */}
<div className="relative mb-4 flex justify-center lg:mb-0">
  {/* Background Circle */}
  <div className="absolute h-36 w-36 rounded-full bg-zinc-100 blur-2xl sm:h-48 sm:w-48 lg:h-80 lg:w-80"></div>

<div className="relative">
  {/* Glow */}
  <div className="absolute inset-0 rounded-full bg-zinc-200 blur-3xl opacity-50"></div>

  {/* Floating Ring */}
<div className="rounded-[40px] bg-zinc-100 p-5 shadow-xl">
  <Image
    src="/images/maha-logo.png"
    width={300}
    height={380}
    alt=""
    className="rounded-[30px]"
  />
</div>git
</div>
</div>
      </div>
    </section>
  );
}