const services = [
  {
    icon: "💻",
    title: "Web Development",
    text: "Modern, fast and responsive websites built for your business.",
  },
  {
    icon: "📱",
    title: "UI/UX Design",
    text: "Beautiful user experiences designed to engage and convert.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    text: "Grow your online presence with data-driven marketing strategies.",
  },
  {
    icon: "🎨",
    title: "Branding",
    text: "Build a memorable brand identity that stands out from competitors.",
  },
  {
    icon: "⚙️",
    title: "Business Solutions",
    text: "Smart technology solutions designed around your business needs.",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    text: "Improve search visibility and bring more customers to your website.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold uppercase tracking-widest text-indigo-600">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Everything You Need to Grow
          </h2>

          <p className="mt-5 text-gray-600">
            From strategy to execution, we provide complete digital services
            for ambitious businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl transition group-hover:bg-indigo-600">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold">{service.title}</h3>

              <p className="mt-3 leading-7 text-gray-600">{service.text}</p>

              <a
                href="#contact"
                className="mt-5 inline-block font-semibold text-indigo-600"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;