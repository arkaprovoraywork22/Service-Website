const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechNova",
    text: "Nexa completely transformed our online presence. The new website increased our leads significantly.",
  },
  {
    name: "Priya Das",
    role: "Marketing Manager",
    text: "The team is professional, creative and extremely responsive. Highly recommended for growing businesses.",
  },
  {
    name: "Arjun Mehta",
    role: "CEO, UrbanSpace",
    text: "From strategy to final delivery, everything was smooth. They understood exactly what our business needed.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold uppercase tracking-widest text-indigo-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-black">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-7 shadow-sm"
            >
              <div className="text-xl text-yellow-400">★★★★★</div>

              <p className="mt-5 leading-7 text-gray-600">"{item.text}"</p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;