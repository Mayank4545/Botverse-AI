import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "The Rise of Autonomous AI Agents in Enterprise Operations",
    category: "AI Agents",
    excerpt: "Moving beyond simple chatbots, AI agents can now plan and execute multi-step workflows. Discover how this shifts the paradigm from 'assistance' to 'delegation'.",
    date: "Oct 12, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" // abstract ai network
  },
  {
    title: "RPA vs LLM Automation: Which Do You Need?",
    category: "Strategy",
    excerpt: "Understanding the difference between deterministic rule-based automation (RPA) and probabilistic generative automation (LLMs) to choose the right tool.",
    date: "Sep 28, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" // circuit board
  },
  {
    title: "Intelligent Document Processing: The End of Data Entry",
    category: "Case Study",
    excerpt: "How modern OCR combined with machine learning is achieving 99% accuracy in extracting data from highly unstructured vendor invoices.",
    date: "Sep 15, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" // documents/paperwork abstract
  },
  {
    title: "Building an Automation Center of Excellence (CoE)",
    category: "Consulting",
    excerpt: "Scaling automation requires governance. Learn the best practices for structuring an internal CoE to manage digital workers securely.",
    date: "Aug 30, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" // modern office abstract
  },
  {
    title: "Transforming Finance with Hyperautomation",
    category: "Industry Focus",
    excerpt: "A deep dive into how CFOs are leveraging a mix of RPA, AI, and IDP to achieve a zero-touch financial close.",
    date: "Aug 12, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" // data charts
  },
  {
    title: "Security Implications of GenAI in the Workplace",
    category: "Security",
    excerpt: "Navigating the risks of enterprise LLM deployment, from data privacy concerns to prompt injection, and how to mitigate them.",
    date: "Jul 22, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80" // cyber security matrix
  }
];

export default function Blog() {
  return (
    <div className="w-full pt-24 pb-24">
      <section className="bg-foreground text-white py-16 md:py-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Insights & Thinking</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Latest perspectives on intelligent automation, artificial intelligence, and digital transformation from the Botverse AI team.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <article className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-primary font-semibold flex items-center group/btn mt-auto w-fit">
                    Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
