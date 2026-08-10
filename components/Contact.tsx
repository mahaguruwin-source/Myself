
import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
     <section
      id="contact"
      className="min-h-screen bg-black px-5 py-5 lg:px-16 lg:pt-16" 
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
         Contact
        </p>

        <h2 className="mt-3 font-[family:var(--font-space)] text-4xl font-bold text-white lg:text-5xl">
          Let's Work Together
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Whether you have a project, an opportunity, or just want to connect,
          I'd love to hear from you.
        </p>

        {/* Contact Card */}
        <div className="relative mt-10 overflow-hidden p-7 shadow-xl sm:p-10 lg:mt-14 lg:p-12">

          {/* Decorative background */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zinc-800/40 blur-3xl" />

          <div className="relative z-10 grid gap-12 md:grid-cols-2">

            {/* Left - Contact Details */}
            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <FaEnvelope className="text-lg text-white" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Email
                  </p>

                  <a
                    href="mailto:mahaguru63@gmail.com"
                    className="text-base font-medium text-white transition hover:text-zinc-300 sm:text-lg"
                  >
                    mahaguru63@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <FaPhoneAlt className="text-lg text-white" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Phone
                  </p>

                  <p className="text-base font-medium text-white sm:text-lg">
                    +91 9790987168
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <FaMapMarkerAlt className="text-lg text-white" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Location
                  </p>

                  <p className="text-base font-medium text-white sm:text-lg">
                    Chennai, India
                  </p>
                </div>
              </div>

            </div>

            {/* Right - Animation */}
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">

              {/* GIF */}
              <div className="mb-6 flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl bg-white/10">
                <img
                  src="/images/maha-logo.png"
                  alt="Let's connect"
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="font-[family:var(--font-space)] text-2xl font-semibold text-white">
                Connect With Me
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
                Have an idea, project, or opportunity in mind?
                Feel free to reach out. I'm always happy to connect.
              </p>

              {/* Social Icons */}
              <div className="mt-7 flex gap-4">

                <a
                  href="https://www.linkedin.com/in/maha-lakshmi-g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  <FaLinkedin size={21} />
                </a>

                <a
                  href="mailto:mahaguru63@gmail.com"
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  <FaEnvelope size={21} />
                </a>

              </div>
    

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500">
          © 2026 Mahalakshmi G. All rights reserved.
        </div>

      </div>
    </section>
  );
}

