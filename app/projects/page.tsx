export default function Projects() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">Projects</h1>

      <p className="mb-10 text-lg leading-8 text-gray-700">
        Throughout my career, I have contributed to a wide range of web
        development projects across corporate, government, and marketing
        websites. My experience includes frontend development, content
        management, website maintenance, and deploying modern web applications.
      </p>

      {/* Government & Enterprise Projects */}
      <section className="mb-10 rounded-lg border p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">
          Government & Enterprise Websites
        </h2>

        <p className="mb-4 text-gray-700">
          Contributed to the frontend development and ongoing maintenance of
          more than <strong>80 websites</strong>, including government and
          public-sector projects such as <strong>CMRL</strong> and embassy
          websites.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Developed responsive and user-friendly web pages.</li>
          <li>Managed website content and regular updates.</li>
          <li>Maintained consistency across multiple websites.</li>
          <li>Implemented UI improvements and resolved frontend issues.</li>
          <li>Collaborated with designers and project teams.</li>
        </ul>
      </section>

      {/* Current Company */}
      <section className="rounded-lg border p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">
          Marketing & CMS Websites
        </h2>

        <p className="mb-4 text-gray-700">
          In my current role, I build modern marketing websites using
          <strong> Next.js</strong>, <strong>React</strong>, and
          <strong> Prismic CMS</strong>. I also work with
          <strong> Elementor</strong> to develop and maintain CMS-driven
          websites.
        </p>

        <h3 className="mb-3 text-xl font-medium">Technologies</h3>

        <div className="mb-6 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "Tailwind CSS",
            "Prismic CMS",
            "Elementor",
            "Git",
            "GitHub",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-xl font-medium">Key Contributions</h3>

        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Built reusable frontend components.</li>
          <li>Integrated dynamic content using Prismic CMS.</li>
          <li>Developed responsive layouts for desktop, tablet, and mobile.</li>
          <li>Optimized website performance and accessibility.</li>
          <li>Managed source code using Git and GitHub.</li>
          <li>Supported website deployment using Vercel.</li>
        </ul>
      </section>
    </main>
  );
}