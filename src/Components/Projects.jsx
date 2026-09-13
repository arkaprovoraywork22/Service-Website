const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    icon: "🛒",
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    icon: "💰",
  },
  {
    title: "Travel Agency",
    category: "Branding & Web",
    icon: "✈️",
  },
  {
    title: "Fitness App",
    category: "Mobile Design",
    icon: "🏋️",
  },
  {
    title: "Real Estate Website",
    category: "Web Development",
    icon: "🏠",
  },
  {
    title: "Restaurant Brand",
    category: "Branding",
    icon: "🍽️",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-widest text-indigo-600">
              Our Work
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Recent Projects
            </h2>
          </div>

          <a
            href="#contact"
            className="font-bold text-indigo-600 hover:text-indigo-800"
          >
            View All Projects →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 text-7xl transition group-hover:scale-105">
                {project.icon}
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-indigo-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>

                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-semibold text-gray-500 hover:text-indigo-600"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;