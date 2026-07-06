import { motion } from "motion/react"

export default function Page() {
  const locations = [
    {
      name: "Summerhill",
      address: "1208 Yonge Street",
      hours: "Mon 8am-5pm • Tue-Thu 8am-12am • Fri-Sat 8am-2am • Sun 8am-8pm",
      phone: "844-726-9227"
    },
    {
      name: "Harbourfront",
      address: "235 Queens Quay West",
      hours: "Mon 9am-5pm • Tue-Thu 9am-11pm • Fri 9am-12am • Sat 10am-12am • Sun 10am-8pm",
      phone: "647-349-1210"
    }
  ]

  const offerings = [
    { title: "Single Origin Espresso", desc: "Rotating selection from world-class roasters", price: "$4" },
    { title: "Chemex Pour Over", desc: "Precision brewed, tasting notes provided", price: "$6" },
    { title: "Natural Wine Flight", desc: "Three curated pours from our cellar", price: "$18" },
    { title: "Craft Cocktails", desc: "Coffee-infused and seasonal classics", price: "$14" },
    { title: "Charcuterie Board", desc: "Local cheese, cured meats, preserves", price: "$22" },
    { title: "Avocado Toast", desc: "Sourdough, heirloom tomato, microgreens", price: "$12" }
  ]

  const features = [
    { num: "01", label: "Third Wave Coffee", text: "Multi-roaster program featuring the finest beans from around the globe, prepared with precision and care." },
    { num: "02", label: "Curated Wine", text: "Hand-selected natural and classic wines, craft beers, and seasonal cocktails in a sophisticated setting." },
    { num: "03", label: "Work & Socialize", text: "Designed as a space to linger—morning laptop sessions to late-night gatherings, all welcome." }
  ]

  return (
    <div className="bg-base min-h-screen text-ink">
      <nav className="fixed top-0 w-full bg-surface/95 backdrop-blur-sm z-50 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-display text-2xl tracking-tight">Boxcar Social</h1>
          <div className="flex gap-8 text-sm">
            <a href="#locations" className="hover:text-accent transition-colors">Locations</a>
            <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-soft mb-6">Toronto Coffee & Wine Bar</div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 max-w-5xl">
            Third wave coffee meets craft wine bar
          </h2>
          <p className="text-xl text-soft max-w-2xl mb-12">Uncompromising dedication to quality. A space designed to linger, work, and socialize in Toronto's most inviting atmosphere.</p>
          <a href="#locations" className="inline-block bg-accent text-base px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors">
            Visit Us
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} transition={{ duration: 1, delay: 0.3 }} className="absolute top-1/2 right-0 font-display text-[20rem] leading-none text-ink pointer-events-none select-none">
          BS
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-surface">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-7 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.2em] text-soft mb-4">About Us</div>
              <h3 className="font-display text-4xl lg:text-5xl leading-tight tracking-tight mb-6">Modern industrial meets warm hospitality</h3>
              <p className="text-soft leading-relaxed mb-6">Boxcar Social brings together the precision of third wave coffee culture with the conviviality of a neighborhood wine bar. Exposed brick, warm wood, and natural light create the perfect backdrop for everything from morning espresso to evening aperitifs.</p>
              <p className="text-soft leading-relaxed">Multiple Toronto locations serve as community hubs where quality is never compromised and every visit feels like home.</p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-accent/20 aspect-[3/4] rounded-lg"></div>
              <div className="bg-accent/30 aspect-[3/4] rounded-lg mt-12"></div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="locations" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <div className="text-xs uppercase tracking-[0.2em] text-soft mb-4 text-center">Our Locations</div>
            <h3 className="font-display text-5xl lg:text-6xl leading-tight tracking-tight mb-16 text-center">Visit us in Toronto</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -4 }} className="bg-surface p-8 rounded-lg border border-ink/10">
                <div className="font-display text-3xl mb-4 text-accent">{loc.name}</div>
                <div className="text-soft mb-6">{loc.address}</div>
                <div className="text-sm text-soft/80 mb-4 leading-relaxed">{loc.hours}</div>
                <a href={`tel:${loc.phone}`} className="text-accent hover:text-accent/80 transition-colors">{loc.phone}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ink text-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {features.map((feat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.08 }}>
                <div className="font-display text-6xl text-accent/40 mb-4">{feat.num}</div>
                <div className="text-xs uppercase tracking-[0.2em] mb-3 text-base/60">{feat.label}</div>
                <p className="text-base/80 leading-relaxed">{feat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <div className="text-xs uppercase tracking-[0.2em] text-soft mb-4 text-center">Menu Highlights</div>
            <h3 className="font-display text-5xl lg:text-6xl leading-tight tracking-tight mb-16 text-center">Coffee, wine & bites</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.06 }} className="bg-surface p-6 rounded-lg border border-ink/10">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-display text-xl tracking-tight">{item.title}</h4>
                  <span className="text-accent font-medium">{item.price}</span>
                </div>
                <p className="text-soft text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-display text-4xl text-accent/60 mx-8">SPECIALTY COFFEE</span>
          <span className="font-display text-4xl text-accent/60 mx-8">NATURAL WINES</span>
          <span className="font-display text-4xl text-accent/60 mx-8">CRAFT COCKTAILS</span>
          <span className="font-display text-4xl text-accent/60 mx-8">ARTISAN FOOD</span>
          <span className="font-display text-4xl text-accent/60 mx-8">SPECIALTY COFFEE</span>
          <span className="font-display text-4xl text-accent/60 mx-8">NATURAL WINES</span>
          <span className="font-display text-4xl text-accent/60 mx-8">CRAFT COCKTAILS</span>
          <span className="font-display text-4xl text-accent/60 mx-8">ARTISAN FOOD</span>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <h3 className="font-display text-4xl lg:text-5xl leading-tight tracking-tight mb-6">Get in touch</h3>
            <p className="text-soft text-lg mb-8">Questions, private events, or just want to say hello?</p>
            <a href="mailto:seyedsepehrfazeli@gmail.com" className="inline-block bg-accent text-base px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors mb-12">
              Email Us
            </a>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-soft">
              <a href="tel:844-726-9227" className="hover:text-accent transition-colors">844-726-9227</a>
              <span>•</span>
              <a href="tel:647-349-1210" className="hover:text-accent transition-colors">647-349-1210</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-base border-t border-ink/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-display text-2xl mb-4">Boxcar Social</h4>
              <p className="text-soft text-sm">Third wave coffee meets craft wine bar in Toronto.</p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] text-soft mb-4">Summerhill</h5>
              <p className="text-sm text-soft/80">1208 Yonge Street</p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] text-soft mb-4">Harbourfront</h5>
              <p className="text-sm text-soft/80">235 Queens Quay West</p>
            </div>
          </div>
          <div className="border-t border-ink/10 pt-6 flex justify-between items-center text-xs text-soft">
            <div>© 2024 Boxcar Social. All rights reserved.</div>
            <a href="https://bysepehr.dev" target="_blank" rel="noopener" className="hover:text-accent transition-colors">Built with Sepehr's AI Studio ✦</a>
          </div>
        </div>
      </footer>
    </div>
  )
}