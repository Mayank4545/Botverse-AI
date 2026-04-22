import { Link } from "wouter";
import { Mail, MapPin, ArrowRight, Linkedin } from "lucide-react";
import { BrandLogoFullWhite } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <BrandLogoFullWhite />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Intelligent Automation for the Future of Work. We help organizations scale and transform through RPA, AI, and Autonomous Agents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Solutions', href: '/solutions' },
                { label: 'ROI Calculator', href: '/roi-calculator' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'RPA Development',
                'AI & Machine Learning',
                'LLM Automation',
                'AI Agents',
                'Intelligent Document Processing'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <a href="mailto:hello@botverse-ai.com" className="hover:text-white transition-colors break-all">
                  hello@botverse-ai.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>Serving clients worldwide with a global delivery model.</span>
              </li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/botverse-ai/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                    <Linkedin size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Botverse AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
