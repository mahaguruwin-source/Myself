export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "CMS",
      skills: [
        "WordPress",
        "Elementor",
        "Prismic CMS",
        "Contentful",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "REST APIs",
        "MySQL",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Storybook",
        "Figma",
        "Vercel",
        "VS Code",
      ],
    },
  ];

  return (
    <section
      id="sec2"
      className="min-h-screen bg-white px-6 py-20 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mt-3 font-[family:var(--font-space)] text-4xl font-bold text-black">
          Technologies I Work With
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          A curated set of technologies I use to build modern web applications,
          manage CMS platforms, and deliver responsive, user-focused digital
          experiences.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-6 font-[family:var(--font-space)] text-2xl font-semibold text-black">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}