"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  const text = "Hello, I'm";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 70 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, displayText.length + 1));

        if (displayText.length === text.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(text.slice(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section className="min-h-screen bg-white px-6 py-16 lg:px-12" id="sec1">
      <div className="mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div className="text-center lg:text-left">

          {/* Animated Hello */}
          <div className="inline-flex items-center rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
            <span>{displayText}</span>

            {/* Blinking Cursor */}
            <span className="ml-1 h-4 w-[2px] animate-pulse bg-black" />
          </div>

          {/* Name */}
          <h1 className="mt-4 font-[family:var(--font-space)] text-3xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:mt-6 lg:text-7xl">
            Mahalakshmi <span className="text-zinc-500">G</span>
          </h1>

          {/* Role */}
          <h2 className="mt-3 font-[family:var(--font-space)] text-lg font-semibold text-zinc-700 sm:text-xl lg:mt-4 lg:text-3xl">
            Senior Web Developer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base lg:mx-0 lg:mt-6 lg:text-lg">
            I'm a Senior Web Developer with over 4 years of experience
            building responsive, high-performance web applications using
            React, Next.js, TypeScript, and Tailwind CSS. I also have
            extensive experience with WordPress and Elementor, creating
            scalable websites with clean UI, strong performance, and an
            excellent user experience.
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
                className="text-zinc-500 transition-colors hover:text-black"
              />
            </a>

            <a
              href="mailto:mahaguru63@gmail.com"
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <FaEnvelope
                size={22}
                className="text-zinc-500 transition-colors hover:text-black"
              />
            </a>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex items-center justify-center">

          {/* Floating Ring */}
          <div className="absolute h-[280px] w-[280px] animate-[spin_12s_linear_infinite] rounded-full border border-zinc-300 sm:h-[360px] sm:w-[360px] lg:h-[450px] lg:w-[450px]" />

          {/* Second subtle ring */}
          <div className="absolute h-[230px] w-[230px] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-zinc-200 sm:h-[310px] sm:w-[310px] lg:h-[390px] lg:w-[390px]" />

          {/* Image Container */}
          <div className="relative z-10 flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full bg-zinc-100 sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]">

            <Image
              src="/images/maha-logo.png"
              alt="Mahalakshmi G"
              width={420}
              height={420}
              className="h-full w-full object-cover"
              priority
            />

          </div>

          {/* Small Floating Dot */}
          <span className="absolute right-[8%] top-[12%] z-20 h-4 w-4 animate-pulse rounded-full bg-black sm:h-5 sm:w-5" />

          {/* Another Floating Dot */}
          <span className="absolute bottom-[15%] left-[8%] z-20 h-3 w-3 animate-pulse rounded-full bg-zinc-400 sm:h-4 sm:w-4" />
        </div>
      </div>
    </section>
  );
}