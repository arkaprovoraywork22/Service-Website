function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="relative">
          <div className="rounded-3xl bg-indigo-600 p-3 shadow-xl">
            <div className="rounded-2xl bg-white p-8">
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-3xl">🚀</p>
                  <h4 className="mt-4 font-bold">Innovation</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Modern solutions
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-3xl">🎯</p>
                  <h4 className="mt-4 font-bold">Results</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Business focused
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-3xl">🤝</p>
                  <h4 className="mt-4 font-bold">Trust</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Long-term partners
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-3xl">⚡</p>
                  <h4 className="mt-4 font-bold">Fast</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Quick delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold uppercase tracking-widest text-indigo-600">
            About Nexa
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            We Turn Ideas Into Reality
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            We are a team of designers, developers and marketing specialists
            who believe that great digital experiences can transform
            businesses.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our approach combines creativity, technology and business strategy
            to create solutions that deliver measurable results.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Experienced creative team",
              "Transparent communication",
              "Business-focused solutions",
              "On-time project delivery",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">
                  ✓
                </span>
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-gray-900 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-600"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;