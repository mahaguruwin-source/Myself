export default function Experience() {
  const experiences = [
    {
      role: "Senior Web Developer",
      company: "Current Company",
      duration: "2022 - Present",
      description:
        "Building modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. Focused on creating scalable frontend solutions, CMS integrations, and delivering seamless user experiences.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      role: "Web Developer",
      company: "iTech India Private Limited",
      duration: "2020 - 2022",
      description:
        "Developed and maintained multiple websites using WordPress and Elementor. Worked on website customization, responsive layouts, performance improvements, and ongoing website maintenance using HTML, CSS, and JavaScript.",
      skills: [
        "WordPress",
        "Elementor",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      role: "Junior Web Developer",
      company: "iTech India Private Limited",
      duration: "2015 - 2018",
      description:
        "Started my web development journey by creating and maintaining websites. Worked on WordPress customization, frontend development, and building responsive web pages using modern web technologies.",
      skills: [
        "WordPress",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];

  return (
    <section
      id="sec3"
      className="min-h-screen bg-white px-6 py-20 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Experience
        </p>

        <h2 className="mt-3 font-(--font-space) text-4xl font-bold text-black">
          My Professional Journey
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          A journey through web development, from building and maintaining
          websites to creating modern scalable applications.
        </p>

        <div className="relative mt-14 space-y-10 border-l border-zinc-200 pl-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[43px] top-10 h-5 w-5 rounded-full border-4 border-white bg-black shadow" />

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-(--font-space) text-2xl font-semibold text-black">
                    {exp.role}
                  </h3>

                  <p className="mt-1 text-zinc-600">
                    {exp.company}
                  </p>
                </div>

                <span className="rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-700">
                  {exp.duration}
                </span>
              </div>

              <p className="mt-5 leading-7 text-zinc-600">
                {exp.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {exp.skills.map((skill) => (
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