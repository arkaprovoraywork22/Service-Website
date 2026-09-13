function Hero() {
  return (
    <section id="home" className="bg-slate-50 pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            🚀 Your Growth Partner
          </div>

          <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-7xl">
            We Build
            <span className="block text-indigo-600">Digital Success.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Nexa is a modern service agency helping businesses grow through
            powerful websites, branding, digital marketing and technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-indigo-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              Start a Project →
            </a>

            <a
              href="#services"
              className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-700 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-3xl font-black">120+</h3>
              <p className="text-sm text-gray-500">Projects Done</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">98%</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-black">5+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-indigo-200 blur-2xl"></div>
          <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-purple-200 blur-2xl"></div>

          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-2 shadow-2xl">
            <div className="rounded-[22px] bg-white p-7">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Business Growth</p>
                  <h3 className="text-3xl font-black">+84.6%</h3>
                </div>
                <div className="rounded-xl bg-green-100 px-3 py-2 text-green-600">
                  ↗ 24%
                </div>
              </div>

              <div className="flex h-56 items-end gap-3">
                {[35, 48, 42, 65, 58, 78, 72, 92, 84, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-indigo-500 transition hover:bg-indigo-700"
                      style={{ height: `${height}%` }}
                    ></div>
                  )
                )}
              </div>

              <div className="mt-5 flex justify-between text-xs text-gray-400">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;