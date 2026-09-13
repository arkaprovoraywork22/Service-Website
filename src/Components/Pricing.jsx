const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for small businesses and startups.",
    features: [
      "5 Page Website",
      "Responsive Design",
      "Basic SEO",
      "Contact Form",
      "7 Days Support",
    ],
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "For businesses ready to grow online.",
    features: [
      "10 Page Website",
      "Premium UI/UX",
      "Advanced SEO",
      "Analytics Setup",
      "30 Days Support",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "₹49,999",
    description: "Complete digital solution for growing companies.",
    features: [
      "Unlimited Pages",
      "Custom Features",
      "Advanced SEO",
      "Marketing Strategy",
      "90 Days Support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold uppercase tracking-widest text-indigo-600">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Simple & Transparent
          </h2>

          <p className="mt-5 text-gray-600">
            Choose a package that fits your business requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-indigo-600 shadow-2xl"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-bold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-black">{plan.name}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {plan.description}
              </p>

              <div className="mt-7">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-gray-500"> / project</span>
              </div>

              <div className="my-7 h-px bg-gray-200"></div>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-8 block rounded-xl py-3 text-center font-bold ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-800 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;