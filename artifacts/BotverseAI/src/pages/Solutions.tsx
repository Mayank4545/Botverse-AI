import { FadeIn } from "@/components/ui/FadeIn";
import { Building2, Headset, Database, Truck, MonitorIcon } from "lucide-react";

const solutions = [
  {
    title: "Finance & Accounting Automation",
    icon: Building2,
    problem: "Finance teams spend countless hours on manual data entry, invoice reconciliation, and period-end closing, leading to burnout and costly errors.",
    solution: "Botverse AI deploys RPA and IDP to automatically ingest invoices, match POs, process journal entries, and generate financial reports without human intervention.",
    benefits: ["90% reduction in processing time", "Zero calculation errors", "Always-on audit trail", "Faster month-end closes"]
  },
  {
    title: "Customer Support Automation",
    icon: Headset,
    problem: "High volumes of repetitive customer inquiries overwhelm support agents, increasing response times and decreasing customer satisfaction.",
    solution: "We implement LLM-powered virtual agents capable of understanding complex queries, retrieving account data, and resolving tier 1 and 2 tickets instantly.",
    benefits: ["Instant 24/7 resolutions", "Consistent brand voice", "Seamless escalation to humans", "Massive reduction in ticket backlog"]
  },
  {
    title: "Data Extraction & Processing",
    icon: Database,
    problem: "Valuable business data is trapped in emails, PDFs, and unstructured documents, requiring tedious manual transcription.",
    solution: "Using advanced AI vision and language models, we create pipelines that automatically read, extract, structure, and route data directly to your ERP or CRM.",
    benefits: ["Unlocks dark data", "Eliminates manual transcription", "High accuracy validation", "Real-time data availability"]
  },
  {
    title: "Supply Chain Automation",
    icon: Truck,
    problem: "Fragmented supply chain systems require manual updates for inventory tracking, order processing, and shipment status, causing delays and lack of visibility.",
    solution: "Autonomous agents monitor inventory levels, predict shortages using ML, and automatically generate purchase orders across disparate vendor portals.",
    benefits: ["Proactive shortage prevention", "Automated vendor communication", "End-to-end visibility", "Optimized stock levels"]
  },
  {
    title: "IT Operations Automation",
    icon: MonitorIcon,
    problem: "IT helpdesks are bogged down with password resets, access requests, and routine system monitoring tasks.",
    solution: "We engineer automation scripts and chatbots that empower employees to self-serve routine IT requests and automate server monitoring and incident response.",
    benefits: ["Zero-touch password resets", "Automated user provisioning", "Proactive issue resolution", "Freed-up IT engineering time"]
  }
];

export default function Solutions() {
  return (
    <div className="w-full pt-24 pb-24 bg-background">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center pt-10">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground font-semibold text-sm mb-4 border border-accent/20">
            Use Cases
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">Solutions by Function</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Botverse AI applies intelligent automation across different business departments to solve specific operational bottlenecks.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {solutions.map((solution, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row">
                {/* Left Side: Title & Problem */}
                <div className="md:w-5/12 bg-muted/50 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-md">
                    <solution.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <div className="space-y-2">
                    <span className="text-sm font-bold text-red-500 uppercase tracking-wider">The Challenge</span>
                    <p className="text-muted-foreground">{solution.problem}</p>
                  </div>
                </div>
                
                {/* Right Side: Solution & Benefits */}
                <div className="md:w-7/12 p-8 md:p-10">
                  <div className="mb-8">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">The Botverse AI Solution</span>
                    <p className="text-lg text-foreground">{solution.solution}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 block">Business Impact</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 bg-background border border-border rounded-lg p-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
