import { Link } from "wouter";
import { ArrowRight, Bot, Cpu, FileText, LineChart, Network, Zap, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          {/* subtle gradient mesh overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-abstract.png`}
            alt="Abstract automation background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Transforming the Enterprise
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Intelligent Automation for the <span className="text-gradient">Future of Work</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Botverse AI empowers organizations to automate complex business processes using cutting-edge RPA, AI, LLMs, and autonomous Agents. Scale faster, reduce costs, and innovate.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 text-lg group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-foreground bg-white border border-border hover:bg-muted hover:border-primary/30 transition-all duration-300 text-lg"
              >
                Explore Solutions
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats/Logo Banner (Abstract representation) */}
      <section className="py-10 border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Industries We Transform
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Generic text representing industries instead of logos */}
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">FINANCE</span>
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">HEALTHCARE</span>
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">MANUFACTURING</span>
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">RETAIL</span>
            <span className="font-display font-bold text-xl md:text-2xl text-foreground">LOGISTICS</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive technology solutions designed to eliminate manual tasks and unlock human potential.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "RPA Development", desc: "Automate repetitive, rule-based tasks with precision and scale using industry-leading RPA platforms." },
              { icon: BrainCircuit, title: "AI & Machine Learning", desc: "Embed intelligence into your workflows with predictive models, computer vision, and predictive analytics." },
              { icon: Bot, title: "LLM & GenAI", desc: "Leverage large language models to generate insights, summarize data, and automate complex communication." },
              { icon: Network, title: "AI Agents", desc: "Deploy autonomous agents capable of reasoning, planning, and executing multi-step business goals." },
              { icon: FileText, title: "Intelligent Document Processing", desc: "Extract, classify, and validate unstructured data from invoices, forms, and contracts automatically." },
              { icon: LineChart, title: "Automation Consulting", desc: "Strategic assessment of your processes to build a high-ROI automation roadmap and CoE setup." }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-border/50 card-hover h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                  <Link href="/services" className="text-primary font-semibold flex items-center group/link mt-auto w-fit">
                    Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/pattern-bg.png`}
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Why Partner With botverse AI?
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  We don't just write code; we solve business problems. Our holistic approach ensures that automation delivers measurable impact to your bottom line.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Significant Cost Reduction", desc: "Lower operational costs by up to 60% by automating high-volume manual processes." },
                    { title: "Infinite Scalability", desc: "Digital workers operate 24/7/365, instantly scaling to meet seasonal demands." },
                    { title: "Zero Error Rate", desc: "Eliminate human error in data entry and compliance-heavy tasks." },
                    { title: "True Digital Transformation", desc: "Move beyond task automation to reinvent how your entire business operates." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{benefit.title}</h4>
                        <p className="text-white/60">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="relative">
              <FadeIn direction="left">
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                   {/* technology server room abstract */}
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                    alt="Technology operations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent opacity-80" />
                  
                  {/* Floating stat card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-foreground font-bold">
                        <Zap size={24} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">Accelerate Growth</p>
                        <p className="text-white/70 text-sm">Free your team to focus on strategic initiatives</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Automate Your Future?</h2>
            <p className="text-muted-foreground text-xl mb-10">
              Schedule a free discovery session with our automation architects to identify high-ROI opportunities in your business.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-primary shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Contact Our Experts
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// Custom icon for BrainCircuit to match lucide style since it might not be in standard set depending on version
function BrainCircuit(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
      <path d="M16 8V5c0-1.1.9-2 2-2" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M19 18v-1a2 2 0 0 0-2-2h-1" />
      <circle cx="16" cy="13" r="2" />
      <circle cx="18" cy="5" r="2" />
    </svg>
  );
}
