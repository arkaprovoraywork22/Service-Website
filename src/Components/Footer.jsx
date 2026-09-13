function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black text-indigo-400">Nexa.</h2>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              We help ambitious businesses grow through design, technology and
              digital strategy.
            </p>

            <div className="mt-6 flex gap-3">
              {["f", "in", "𝕏", "◎"].map((social) => (
                <a
                  href="#"
                  key={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-bold transition hover:bg-indigo-600"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <a className="block hover:text-white" href="#about">
                About Us
              </a>
              <a className="block hover:text-white" href="#projects">
                Projects
              </a>
              <a className="block hover:text-white" href="#pricing">
                Pricing
              </a>
              <a className="block hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Services</h3>

            <div className="mt-5 space-y-3 text-gray-400">
              <p>Web Development</p>
              <p>UI/UX Design</p>
              <p>Digital Marketing</p>
              <p>Branding</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-7 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nexa Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;