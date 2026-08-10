
export default function Experience() {
  const experiences = [
    {
      role: "Senior Web Developer",
      company: "Current Company",
      duration: "2022 - Present",
      description:
        "Building modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. Focused on scalable frontend solutions, CMS integrations, and seamless user experiences.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      role: "Web Developer",
      company: "iTech India Private Limited",
      duration: "2020 - 2022",
      description:
        "Developed and maintained multiple websites using WordPress and Elementor. Worked on website customization, responsive layouts, performance improvements, and ongoing website maintenance.",
      skills: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    },
    {
      role: "Junior Web Developer",
      company: "iTech India Private Limited",
      duration: "2015 - 2018",
      description:
        "Started my web development journey by creating and maintaining websites. Worked on WordPress customization, frontend development, and building responsive web pages.",
      skills: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
  ];

  return (
  <section
      id="sec3"
      className="min-h-screen bg-white px-5 py-5 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
       
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-3 font-(--font-space) text-4xl font-bold text-black lg:text-5xl">
            My Professional Journey
          </h2>

          <p className="mx-auto  mt-4  text-lg leading-8 text-zinc-600">
            A journey through web development, from building and maintaining
            websites to creating modern scalable applications.
          </p>
      

        {/* Experience Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-xl lg:p-7"
            >
              {/* Card Number */}
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  0{index + 1}
                </span>

                <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-medium text-zinc-700">
                  {exp.duration}
                </span>
              </div>

              {/* Role */}
              <div className="mt-7">
                <h3 className="font-(--font-space) text-xl font-bold text-black lg:text-2xl">
                  {exp.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-zinc-500">
                  {exp.company}
                </p>
              </div>

              {/* Description */}
              <p className="mt-5 flex-1 text-sm leading-7 text-zinc-600">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-all duration-300 group-hover:border-zinc-300"
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
