import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-black text-indigo-600">
          Nexa<span className="text-gray-900">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="text-sm font-medium text-gray-600 transition hover:text-indigo-600"
            >
              {name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white px-6 py-5 md:hidden">
          {links.map(([name, link]) => (
            <a
              key={name}
              href={link}
              onClick={() => setOpen(false)}
              className="block border-b py-3 text-gray-700"
            >
              {name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-indigo-600 px-5 py-3 text-center font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;