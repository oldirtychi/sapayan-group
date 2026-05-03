import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-[100dvh] w-full bg-background selection:bg-primary/20">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 mix-blend-difference text-white flex justify-between items-center">
        <div className="font-serif text-xl tracking-widest uppercase">Sapayan Group</div>
        <div className="text-xs tracking-widest uppercase opacity-70">Chicago · Amsterdam · Cebu</div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-foreground text-background">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-architecture.png`} 
            alt="Classical Architecture" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/50 to-foreground" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-serif font-medium leading-[1.1] text-balance mb-8 text-background">
              Generations of quiet stewardship.
            </h1>
            <p className="text-lg md:text-xl font-sans font-light tracking-wide text-background/70 max-w-xl">
              Preserving and compounding capital for sovereign entities, 
              endowments, and families of standing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 px-8 md:px-24 relative" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/texture-cream.png')`, backgroundBlendMode: 'multiply' }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-primary text-sm tracking-[0.3em] uppercase mb-8">Our Philosophy</h2>
            <p className="text-3xl md:text-5xl font-serif leading-snug text-foreground text-balance">
              True standing does not require an audience. We measure success not in quarters, but in generations.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-12">
            <div className="w-px h-24 bg-primary/30 mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 px-8 md:px-24 bg-foreground text-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Technology & Digital Infrastructure",
              desc: "Strategic investments in transformative technology platforms, digital infrastructure, and next-generation systems that define the modern economy.",
              img: `${import.meta.env.BASE_URL}images/tech-datacenter.png`
            },
            {
              title: "Real Assets",
              desc: "Acquisition and stewardship of generational properties in prime global jurisdictions. Value preservation through physical permanence.",
              img: `${import.meta.env.BASE_URL}images/natural-resources.png`
img: `${import.meta.env
            },
            {
              title: "Infrastructure",
              desc: "Foundational investments in the systems that power modern civilization. Long-duration, inflation-linked yield.",
              img: `${import.meta.env.BASE_URL}images/infrastructure.png`
            }
          ].map((sector, i) => (
            <FadeIn key={i} delay={i * 0.2} className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-background/5">
                <img 
                  src={sector.img} 
                  alt={sector.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-all duration-700" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-background">{sector.title}</h3>
              <p className="text-sm font-sans text-background/60 leading-relaxed max-w-xs">{sector.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section className="py-32 md:py-48 px-8 md:px-24 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <FadeIn>
            <div className="aspect-square bg-muted relative p-8 flex items-center justify-center border border-primary/20">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/texture-cream.png')` }} />
              <div className="text-center z-10">
                <div className="text-7xl font-serif text-primary mb-4">1842</div>
                <div className="text-xs tracking-[0.2em] uppercase text-foreground/60">Foundation</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-primary text-sm tracking-[0.3em] uppercase mb-8">Governance</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">Discretion by design.</h3>
            <p className="text-foreground/70 font-sans leading-relaxed mb-8 max-w-md">
              The Sapayan Group operates under a strictly private partnership model. Our governance structure is designed to isolate decision-making from short-term market pressures, allowing us to allocate capital with true independence.
            </p>
            <p className="text-foreground/70 font-sans leading-relaxed max-w-md">
              We do not accept unsolicited capital. All partnerships are established through direct introduction.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-24 px-8 md:px-24 bg-foreground text-background border-t border-background/10">
        <FadeIn className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div>
            <h2 className="text-3xl font-serif mb-8 text-background">Sapayan Group</h2>
            <div className="flex gap-16 text-sm font-sans text-background/50">
              <div>
                <p className="text-background/80 mb-4 tracking-widest uppercase text-xs">Chicago</p>
                <p>The Loop</p>
                <p>United States</p>
              </div>
              <div>
                <p className="text-background/80 mb-4 tracking-widest uppercase text-xs">Amsterdam</p>
                <p>Zuidas</p>
                <p>Netherlands</p>
              </div>
              <div>
                <p className="text-background/80 mb-4 tracking-widest uppercase text-xs">Cebu</p>
                <p>Cebu Business Park</p>
                <p>Philippines</p>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Inquiries</p>
            <p className="text-background/50 font-serif italic">By invitation only.</p>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
}
