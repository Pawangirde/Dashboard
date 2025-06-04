"use client";

export default function ContactPage() {
  return (
    <>
      <div className="max-w-600 mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you. Fill out the form below and we'll get back
          to you as soon as possible.
        </p>

        <form className="space-y-6 bg-white p-6 rounded shadow">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
