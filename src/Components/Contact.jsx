import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-widest text-indigo-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Let's Build Something Great
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-gray-600">
            Have an idea or project in mind? Tell us about it and our team will
            get back to you soon.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-600">hello@nexaagency.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-gray-600">Kolkata, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          {submitted ? (
            <div className="flex min-h-96 flex-col items-center justify-center text-center">
              <div className="text-6xl">✅</div>
              <h3 className="mt-5 text-2xl font-black">Thank You!</h3>
              <p className="mt-3 text-gray-600">
                Your message has been submitted successfully.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 font-semibold text-indigo-600"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Service
                </label>

                <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                  <option>SEO</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 py-3.5 font-bold text-white transition hover:bg-indigo-700"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;