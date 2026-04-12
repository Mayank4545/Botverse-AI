import { FadeIn } from "@/components/ui/FadeIn";
import { Linkedin, Mail, Globe } from "lucide-react";

const team = [
  {
    name: "Mallikarjun Kurugundala",
    role: "Founder & CEO",
    email: "Mallikarjun.Kurugundala@botverse-ai.com",
    linkedin: "https://www.linkedin.com/in/mallikarjun-kurugundala-3a7054192/",
    initials: "MK"
  },
  {
    name: "Mayank Keshri",
    role: "Co-Founder",
    email: "Mayank.Keshri@botverse-ai.com",
    linkedin: "https://www.linkedin.com/in/mayankkeshri/",
    initials: "MK"
  },
  {
    name: "Shubham Anand",
    role: "Co-Founder",
    email: "Shubham.Anand@botverse-ai.com",
    linkedin: "https://www.linkedin.com/in/shubham-anand-058192107/",
    initials: "SA"
  }
];

export default function About() {
  return (
    <div className="w-full pt-24 pb-24">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-foreground text-white relative overflow-hidden">
        {/* subtle background pattern image */}
        <img 
          src={`${import.meta.env.BASE_URL}images/pattern-bg.png`}
          alt="Pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">Pioneering the <span className="text-accent">Future</span> of Work</h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              We are a collective of technologists, automation architects, and AI researchers dedicated to augmenting human potential.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="p-8 md:p-12 rounded-3xl bg-muted/50 border border-border h-full">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize access to enterprise-grade automation and artificial intelligence. We believe that technology should handle the mundane so humans can focus on creativity, strategy, and empathy. By building intelligent systems, we help organizations scale efficiently and sustainably.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/10 h-full">
                <h2 className="text-3xl font-bold mb-6 text-primary">Global Delivery</h2>
                <div className="flex items-start gap-4 mb-6">
                  <Globe className="text-accent w-8 h-8 shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Botverse AI operates on a global delivery model, serving clients worldwide. Our distributed teams ensure round-the-clock development, support, and implementation of cutting-edge solutions regardless of your geographic location.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Led by industry experts with deep experience in automation, software engineering, and artificial intelligence.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-8 text-center border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-primary/20">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-6">{member.role}</p>
                  
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin size={16} />
                      LinkedIn Profile
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={16} />
                      {member.email}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
