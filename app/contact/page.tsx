export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-bold">Contact Me</h1>

      <p className="mb-8 text-gray-600">
        Have a project in mind or would like to connect? Fill out the form
        below, and I'll get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Enter subject"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}