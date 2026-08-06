export default function Skills() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">Skills</h1>

      <p className="mb-10 text-lg leading-8 text-gray-700">
        I specialize in frontend development and enjoy building responsive,
        user-friendly, and high-performance web applications using modern web
        technologies.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Frontend */}
        <section className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Frontend</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• HTML5</li>
            <li>• CSS3</li>
            <li>• JavaScript (ES6+)</li>
            <li>• React.js</li>
            <li>• Next.js</li>
            <li>• Tailwind CSS</li>
          </ul>
        </section>

        {/* CMS */}
        <section className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">CMS</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Prismic CMS</li>
            <li>• WordPress</li>
            <li>• Elementor</li>
          </ul>
        </section>

        {/* Tools */}
        <section className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Tools</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Git</li>
            <li>• GitHub</li>
            <li>• VS Code</li>
            <li>• Figma</li>
          </ul>
        </section>

        {/* Learning */}
        <section className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Currently Learning</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Redux Toolkit</li>
            <li>• TypeScript</li>
            <li>• Performance Optimization</li>
            <li>• SEO Best Practices</li>
          </ul>
        </section>
      </div>
    </main>
  );
}