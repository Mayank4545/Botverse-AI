import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Cpu, Bot, Network, FileText, LineChart, Code2 } from "lucide-react";

const services = [
  {
    id: "rpa",
    icon: Cpu,
    title: "RPA Development & Implementation",
    description: "We build robust Robotic Process Automation (RPA) solutions that mimic human interactions with digital systems to execute repetitive, rule-based processes.",
    benefits: ["100% Data Accuracy", "24/7 Uninterrupted Operation", "Rapid Implementation Time", "Non-invasive to existing IT"],
    useCases: "Data entry, invoice processing, employee onboarding, system reconciliation."
  },
  {
    id: "ai-ml",
    icon: Code2,
    title: "AI and Machine Learning Solutions",
    description: "Transform your data into predictive power. We build custom ML models to forecast trends, categorize information, and make intelligent decisions in real-time.",
    benefits: ["Predictive Insights", "Pattern Recognition", "Data-Driven Decisions", "Automated Categorization"],
    useCases: "Demand forecasting, fraud detection, customer churn prediction."
  },
  {
    id: "llm",
    icon: Bot,
    title: "LLM-powered Automation",
    description: "Integrate Large Language Models (like GPT-4) into your workflows to understand context, generate content, and process natural language at scale.",
    benefits: ["Human-like Text Generation", "Contextual Understanding", "Automated Summarization", "Multilingual Support"],
    useCases: "Customer email drafting, contract summarization, technical support Q&A."
  },
  {
    id: "agents",
    icon: Network,
    title: "AI Agents & Autonomous Workflows",
    description: "The next frontier of AI. We deploy autonomous agents that can plan, use tools, browse the web, and execute complex multi-step goals without human intervention.",
    benefits: ["Goal-Oriented Execution", "Dynamic Tool Usage", "Self-Correction", "Complex Problem Solving"],
    useCases: "Autonomous research, complex workflow orchestration, intelligent personal assistants."
  },
  {
    id: "idp",
    icon: FileText,
    title: "Intelligent Document Processing (IDP)",
    description: "Stop manual data entry. Our IDP solutions combine OCR with AI to extract, classify, and validate data from highly unstructured and complex documents.",
    benefits: ["Handles Unstructured Data", "High Extraction Accuracy", "Reduced Manual Review", "Seamless ERP Integration"],
    useCases: "Invoice parsing, handwriting recognition, identity document verification."
  },
  {
    id: "consulting",
    icon: LineChart,
    title: "Process Assessment & Consulting",
    description: "Not sure where to start? We analyze your business processes to identify automation candidates, calculate ROI, and build a strategic roadmap.",
    benefits: ["Clear ROI Calculation", "Process Standardization", "Center of Excellence Setup", "Risk Mitigation"],
    useCases: "Enterprise automation strategy, tool selection, process mining."
  }
];

export default function Services() {
  return (
    <div className="w-full pt-24 pb-24">
      {/* Header */}
      <section className="bg-muted py-16 md:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end intelligent automation solutions engineered to optimize operations, enhance decision-making, and drive enterprise value.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <FadeIn key={service.id} direction={index % 2 === 0 ? "right" : "left"}>
                <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual block */}
                  <div className="w-full lg:w-5/12 aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 to-muted border border-border/50 p-8 flex flex-col justify-center items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={40} />
                    </div>
                    <h3 className="relative z-10 font-display text-2xl font-bold text-center">{service.title}</h3>
                  </div>

                  {/* Content block */}
                  <div className="w-full lg:w-7/12">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-muted p-6 rounded-xl border border-border">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Common Use Cases
                      </h4>
                      <p className="text-muted-foreground">{service.useCases}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">The Process</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                From idea to impact<br />in four steps
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                A clear, proven methodology that delivers results — fast.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            {/* Desktop timeline */}
            <div className="hidden md:block relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border z-0" />

              <div className="grid grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    num: "01",
                    label: "Discover",
                    desc: "We audit your processes and identify the highest-impact automation opportunities.",
                    circleColor: "bg-blue-50 border-blue-200",
                    numColor: "text-blue-600",
                  },
                  {
                    num: "02",
                    label: "Design",
                    desc: "Our architects design intelligent solutions tailored to your tech stack and goals.",
                    circleColor: "bg-teal-50 border-teal-200",
                    numColor: "text-teal-600",
                  },
                  {
                    num: "03",
                    label: "Deploy",
                    desc: "We build, test, and launch your bots and agents — with zero disruption to operations.",
                    circleColor: "bg-orange-50 border-orange-200",
                    numColor: "text-orange-500",
                  },
                  {
                    num: "04",
                    label: "Scale",
                    desc: "We grow your automation programme and continuously optimize for maximum ROI.",
                    circleColor: "bg-slate-50 border-slate-200",
                    numColor: "text-slate-500",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 bg-white shadow-sm ${step.circleColor}`}>
                      <span className={`text-xl font-bold font-mono ${step.numColor}`}>{step.num}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden flex flex-col gap-0">
              {[
                {
                  num: "01",
                  label: "Discover",
                  desc: "We audit your processes and identify the highest-impact automation opportunities.",
                  circleColor: "bg-blue-50 border-blue-200",
                  numColor: "text-blue-600",
                  lineColor: "bg-blue-200",
                },
                {
                  num: "02",
                  label: "Design",
                  desc: "Our architects design intelligent solutions tailored to your tech stack and goals.",
                  circleColor: "bg-teal-50 border-teal-200",
                  numColor: "text-teal-600",
                  lineColor: "bg-teal-200",
                },
                {
                  num: "03",
                  label: "Deploy",
                  desc: "We build, test, and launch your bots and agents — with zero disruption to operations.",
                  circleColor: "bg-orange-50 border-orange-200",
                  numColor: "text-orange-500",
                  lineColor: "bg-orange-200",
                },
                {
                  num: "04",
                  label: "Scale",
                  desc: "We grow your automation programme and continuously optimize for maximum ROI.",
                  circleColor: "bg-slate-50 border-slate-200",
                  numColor: "text-slate-500",
                  lineColor: "bg-slate-200",
                },
              ].map((step, i, arr) => (
                <div key={step.num} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center shrink-0 bg-white shadow-sm ${step.circleColor}`}>
                      <span className={`text-base font-bold font-mono ${step.numColor}`}>{step.num}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className={`w-px flex-1 my-2 ${step.lineColor}`} />
                    )}
                  </div>
                  <div className={`pb-10 ${i === arr.length - 1 ? "" : ""}`}>
                    <h3 className="text-lg font-bold mb-2 mt-3">{step.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Unsure which solution fits your needs?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Let our experts assess your workflows and recommend the optimal technology stack for maximum ROI.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-primary bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg relative z-10"
            >
              Request an Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
