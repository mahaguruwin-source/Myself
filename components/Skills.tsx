
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
      className="min-h-screen bg-white px-5 py-5 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
        
            Skills
          </p>

          <h2 className="mt-3 font-[family:var(--font-space)] text-4xl font-bold text-black lg:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            A curated set of technologies I use to build modern web
            applications, manage CMS platforms, and deliver responsive,
            user-focused digital experiences.
          </p>
      

        {/* Single Skills Box */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm lg:mt-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`p-7 lg:p-8 ${
                  index !== skillGroups.length - 1
                    ? "border-b border-zinc-200 md:border-r"
                    : ""
                } ${
                  index === 1
                    ? "lg:border-r"
                    : ""
                }`}
              >
                {/* Group Title */}
                <h3 className="font-[family:var(--font-space)] text-xl font-semibold text-black">
                  {group.title}
                </h3>

                {/* Skills */}
                <ul className="mt-6 space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm font-medium text-zinc-600"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

                      <span className="transition-colors duration-200 hover:text-black">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

