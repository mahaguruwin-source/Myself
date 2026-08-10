"use client";

import { useEffect, useState } from "react";
import {
  FaHome,
  FaTools,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { href: "#sec1", label: "Home", icon: FaHome },
  { href: "#sec2", label: "Skills", icon: FaTools },
  { href: "#sec3", label: "Experience", icon: FaBriefcase },
  { href: "#contact", label: "Contact", icon: FaEnvelope },
];

export default function SideNav() {
  const [active, setActive] = useState("#sec1");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-16 border-r border-zinc-800 bg-black lg:w-80">
      <nav className="flex h-full items-center">
        <ul className="w-full space-y-3 px-3 lg:px-6">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = active === href;

            return (
              <li key={label}>
                <a
                  href={href}
                  className={`group relative flex items-center justify-center gap-4 rounded-lg py-3 transition-all duration-300 lg:justify-start lg:px-4 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {/* Left Indicator */}
                  <span
                    className={`absolute left-0 w-1 rounded-full bg-white transition-all duration-300 ${
                      isActive ? "h-8" : "h-0 group-hover:h-8"
                    }`}
                  />

                  {/* Icon */}
                  <Icon
                    size={20}
                    className={`transition-all duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />

                  {/* Text */}
                  <span className="hidden text-base font-medium tracking-wide lg:block">
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-8 hidden w-full px-6 lg:block">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
         MAHALAKSHMI G
        </p>
      </div>
    </aside>
  );
}