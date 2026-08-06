import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-5 py-20 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-3 font-[family:var(--font-space)] text-4xl font-bold text-black">
          Let's Work Together
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          Whether you have a project, an opportunity, or just want to connect,
          I'd love to hear from you.
        </p>

        <div className="mt-5 lg:mt-14 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-sm lg:text-xl text-black" />
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <a
                    href="mailto:mahaguru63@gmail.com"
                    className="text-md lg:text-lg font-medium text-black hover:underline"
                  >
                   mahaguru63@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-black" />
                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="text-md lg:text-lg font-medium text-black">
                    +91 9790987168
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-black" />
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-md lg:text-lg font-medium text-black">
                    Chennai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">
              <h3 className="font-[family:var(--font-space)] text-[18px] lg:text-2xl font-semibold text-black">
                Connect With Me
              </h3>

           

              <div className="mt-8 flex gap-5">
            

                <a
                  href="https://www.linkedin.com/in/maha-lakshmi-g/"
                  target="_blank"
                  className="rounded-full border border-zinc-300 p-4 transition hover:bg-black hover:text-white"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="mailto:mahaguru63@gmail.com"
                  className="rounded-full border border-zinc-300 p-4 transition hover:bg-black hover:text-white"
                >
                  <FaEnvelope size={22} />
                </a>
              </div>

              <a
                href="mailto:mahaguru63@gmail.com"
                className="mt-10 inline-block w-fit rounded-full bg-black px-8 py-3 font-medium text-white transition hover:bg-zinc-800"
              >
                Say Hello 👋
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-zinc-200 pt-8 text-center text-zinc-500">
          © 2026 Mahalakshmi G. All rights reserved.
        </div>
      </div>
    </section>
  );
}