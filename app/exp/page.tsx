export default function Experience() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">Experience</h1>

      <p className="mb-10 text-lg leading-8 text-gray-700">
        My professional experience has focused on building responsive,
        user-friendly, and high-performance web applications using modern
        frontend technologies.
      </p>

      <div className="rounded-lg border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">
          Frontend Developer
        </h2>

        <p className="mt-2 text-gray-500">
          Company Name • Full-Time
        </p>

        <p className="mb-6 text-gray-500">
          2024 – Present
        </p>

        <ul className="list-disc space-y-3 pl-5 text-gray-700">
          <li>
            Develop responsive and modern websites using React, Next.js, and
            Tailwind CSS.
          </li>
          <li>
            Build reusable UI components to ensure consistency across projects.
          </li>
          <li>
            Integrate dynamic content using Prismic CMS.
          </li>
          <li>
            Collaborate with designers and developers to deliver high-quality
            user experiences.
          </li>
          <li>
            Optimize website performance, accessibility, and SEO.
          </li>
          <li>
            Use Git and GitHub for version control and team collaboration.
          </li>
        </ul>
      </div>
    </main>
  );
}