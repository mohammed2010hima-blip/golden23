import { motion } from "framer-motion";

const services = [
  "Logo Design",
  "Brand Identity Design",
  "Social Media Design",
  "Advertising Design",
  "Packaging Design",
  "Print Design",
  "UI/UX Design",
  "Marketing Materials",
];

const portfolioProjects = [
  {
    name: "Aurelia Skincare Rebrand",
    category: "Branding",
    description: "Complete visual identity refresh focused on premium positioning and trust.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Volt Studio Mark System",
    category: "Logos",
    description: "Flexible logo suite and usage system for digital-first applications.",
    image:
      "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Nova Fashion Campaign",
    category: "Social Media",
    description: "Multi-platform campaign creatives designed for engagement and reach.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Urban Beats Festival",
    category: "Posters",
    description: "Bold event poster system blending expressive typography and street culture.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Vetra Coffee Packaging",
    category: "Packaging",
    description: "Shelf-ready package line crafted around flavor storytelling and consistency.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "SaaS Flow Dashboard",
    category: "UI Design",
    description: "Modern interface system balancing clarity, hierarchy, and visual personality.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

const skills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Illustrator", level: 96 },
  { name: "Adobe InDesign", level: 90 },
  { name: "Figma", level: 93 },
  { name: "Canva", level: 88 },
  { name: "After Effects", level: 84 },
];

const testimonials = [
  {
    quote:
      "[Designer Name] elevated our entire brand in less than six weeks. The new identity feels world-class and instantly recognizable.",
    author: "Maya Rodriguez",
    role: "Marketing Director, Evolve Labs",
  },
  {
    quote:
      "Every deliverable came with strategic thinking, not just visuals. We saw stronger campaign performance immediately.",
    author: "Daniel Kim",
    role: "Founder, Northline Studio",
  },
  {
    quote:
      "From concept to final files, the process was smooth, professional, and deeply creative. Highly recommended for premium work.",
    author: "Sophia Patel",
    role: "Brand Manager, Luma Collective",
  },
];

const processSteps = [
  "Research",
  "Concept Development",
  "Design Creation",
  "Revisions",
  "Final Delivery",
];

const navLinks = [
  "About",
  "Services",
  "Portfolio",
  "Skills",
  "Testimonials",
  "Contact",
];

export default function App() {
  return (
    <div className="bg-[#0F172A] text-slate-100 selection:bg-fuchsia-500/30">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-[min(1100px,94%)] items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            [Designer Name]
          </a>
          <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full border border-fuchsia-300/40 bg-fuchsia-500/20 px-4 py-2 text-xs font-medium text-fuchsia-100 transition hover:bg-fuchsia-500/30"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 px-[3%]"
        >
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=2200&q=80"
            alt="Creative workspace with color palettes and design materials"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/65" />

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="floating-shape left-[8%] top-24 h-24 w-24 bg-[#7C3AED]/35"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 18, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="floating-shape bottom-24 right-[8%] h-32 w-32 bg-[#06B6D4]/30"
          />
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="floating-shape right-[20%] top-[26%] h-20 w-20 bg-[#EC4899]/35"
          />

          <div className="relative z-10 mx-auto w-[min(1100px,100%)] pt-18 text-center">
            <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              [Designer Name]
            </p>
            <p className="mt-3 text-base text-[#06B6D4] sm:text-lg">
              Creative Graphic Designer & Visual Artist
            </p>
            <h1 className="mx-auto mt-8 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Creative Designs That Make Brands Stand Out
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-200 sm:text-lg">
              I help businesses build memorable visual identities through creative, modern, and impactful
              design solutions.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm uppercase tracking-[0.18em] text-fuchsia-200/90">
              Transforming Ideas Into Powerful Visual Experiences
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#portfolio"
                className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:-translate-y-0.5"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-lg transition hover:bg-white/20"
              >
                Hire Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-[min(1100px,94%)] py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"
          >
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
              alt="Portrait of a professional designer"
              loading="lazy"
              className="h-full min-h-96 w-full rounded-3xl border border-white/15 object-cover"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">About Me</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Designing with strategy, emotion, and clarity.</h2>
              <p className="mt-5 text-slate-300">
                I am a multidisciplinary graphic designer with 5+ years of experience helping brands express
                their unique voice. My philosophy combines business objectives with visual storytelling to craft
                work that is both beautiful and effective.
              </p>
              <p className="mt-4 text-slate-300">
                My creative approach starts with listening and research, then evolves into concept-driven design
                systems that are practical, scalable, and memorable. From startups to established companies, I
                build visuals that create lasting impressions.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "200+ Designs Created",
                  "100+ Happy Clients",
                  "5+ Years Experience",
                ].map((item) => (
                  <div key={item} className="glass-panel rounded-2xl px-4 py-5 text-center text-sm font-medium text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="border-y border-white/10 bg-slate-900/40 py-24">
          <div className="mx-auto w-[min(1100px,94%)]">
            <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
              End-to-end design solutions tailored to help brands grow with confidence and visual consistency.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.article
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="glass-panel rounded-2xl p-5"
                >
                  <p className="text-sm text-cyan-300">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{service}</h3>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto w-[min(1100px,94%)] py-24">
          <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Portfolio Showcase</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
            Selected projects across Branding, Logos, Social Media, Posters, Packaging, and UI Design.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">{project.category}</p>
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                  <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-fuchsia-300/50 hover:bg-fuchsia-500/20">
                    View Project
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-slate-900/40 py-24">
          <div className="mx-auto w-[min(1100px,94%)]">
            <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Skills</h2>
            <div className="mx-auto mt-10 max-w-3xl space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <div className="mb-2 flex justify-between text-sm text-slate-200">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#EC4899]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="mx-auto w-[min(1100px,94%)] py-24">
          <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Testimonials</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-panel rounded-2xl p-6"
              >
                <p className="text-slate-200">"{item.quote}"</p>
                <footer className="mt-5 text-sm">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-slate-400">{item.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/40 py-24">
          <div className="mx-auto w-[min(1100px,94%)]">
            <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Design Process</h2>
            <ol className="mt-12 grid gap-4 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="glass-panel rounded-2xl px-4 py-6 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Step {index + 1}</p>
                  <p className="mt-2 font-medium text-white">{step}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="mx-auto w-[min(1100px,94%)] py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let's Build Something Iconic</h2>
              <p className="mt-4 text-slate-300">
                Ready to elevate your visual brand presence? Share your project details and I will get back to
                you within 24 hours.
              </p>
              <ul className="mt-8 space-y-3 text-slate-200">
                <li>📧 Email Address: [Your Email]</li>
                <li>🎨 Behance: [Your Behance URL]</li>
                <li>🏀 Dribbble: [Your Dribbble URL]</li>
                <li>💼 LinkedIn: [Your LinkedIn URL]</li>
                <li>📸 Instagram: [Your Instagram URL]</li>
              </ul>
            </div>
            <form className="glass-panel rounded-3xl p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Name
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-400/50"
                    placeholder="Your full name"
                  />
                </label>
                <label className="text-sm text-slate-200">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-400/50"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm text-slate-200">
                Project Type
                <select
                  name="projectType"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400/50"
                >
                  <option>Logo Design</option>
                  <option>Brand Identity</option>
                  <option>Social Media Design</option>
                  <option>Packaging Design</option>
                  <option>UI/UX Design</option>
                </select>
              </label>
              <label className="mt-4 block text-sm text-slate-200">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-400/50"
                  placeholder="Tell me about your project goals, audience, and deadlines."
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-6 py-3 font-semibold text-white transition hover:brightness-110"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/65 py-12">
        <div className="mx-auto grid w-[min(1100px,94%)] gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold text-white">[Designer Name]</p>
            <p className="mt-2 text-sm text-slate-400">Creative Graphic Designer & Visual Artist</p>
          </div>
          <div>
            <p className="font-medium text-white">Quick Links</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium text-white">Social Media</p>
            <p className="mt-3 text-sm text-slate-300">Behance / Dribbble / LinkedIn / Instagram</p>
            <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} [Designer Name]. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
