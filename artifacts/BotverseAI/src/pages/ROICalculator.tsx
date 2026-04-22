import { useState, useMemo } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "wouter";
import {
  Calculator,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  Zap,
  ChevronRight,
  Info,
} from "lucide-react";

interface Inputs {
  numFTEs: number;
  avgFTECost: number;
  hoursPerWeek: number;
  workWeeksPerYear: number;
  annualErrorCost: number;
  implementationCost: number;
  annualMaintenanceCost: number;
  automationCoverage: number;
  fteReallocationPct: number;
}

const defaults: Inputs = {
  numFTEs: 5,
  avgFTECost: 60000,
  hoursPerWeek: 20,
  workWeeksPerYear: 50,
  annualErrorCost: 10000,
  implementationCost: 80000,
  annualMaintenanceCost: 15000,
  automationCoverage: 80,
  fteReallocationPct: 30,
};

function fmt(n: number, decimals = 0) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function fmtUSD(n: number) {
  return "$" + fmt(Math.round(n));
}

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block ml-1">
      <Info
        size={14}
        className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      {show && (
        <span className="absolute z-20 left-5 -top-1 w-52 bg-foreground text-white text-xs rounded-lg p-2 shadow-xl leading-relaxed">
          {text}
        </span>
      )}
    </span>
  );
}

function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min,
  max,
  step,
  tooltip,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  tooltip?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 flex items-center gap-1">
        {label}
        {tooltip && <Tooltip text={tooltip} />}
      </label>
      <div className="flex items-center rounded-xl border border-border bg-background overflow-hidden focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all">
        {prefix && (
          <span className="px-3 py-2.5 text-sm text-muted-foreground bg-muted border-r border-border select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step ?? 1}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 px-3 py-2.5 text-sm bg-transparent outline-none min-w-0"
        />
        {suffix && (
          <span className="px-3 py-2.5 text-sm text-muted-foreground bg-muted border-l border-border select-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  tooltip,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  tooltip?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium flex items-center gap-1">
          {label}
          {tooltip && <Tooltip text={tooltip} />}
        </label>
        <span className="text-sm font-bold text-primary">
          {value}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step ?? 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full accent-primary cursor-pointer"
      />
      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <span>{min}{suffix}</span>
        <span>{max}{suffix}</span>
      </div>
    </div>
  );
}

function ResultCard({
  icon: Icon,
  label,
  value,
  sub,
  highlight,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 border transition-all ${
        highlight
          ? "bg-primary text-white border-primary shadow-xl shadow-primary/20"
          : "bg-card border-border"
      }`}
    >
      <div className={`flex items-center gap-2 mb-2 ${highlight ? "text-white/80" : "text-muted-foreground"}`}>
        <Icon size={16} />
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <p className={`text-2xl font-bold ${highlight ? "text-white" : "text-foreground"}`}>{value}</p>
      {sub && (
        <p className={`text-xs mt-1 ${highlight ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>
      )}
    </div>
  );
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<Inputs>(defaults);

  const set = (key: keyof Inputs) => (v: number) =>
    setInputs((prev) => ({ ...prev, [key]: v }));

  const r = useMemo(() => {
    const {
      numFTEs,
      avgFTECost,
      hoursPerWeek,
      workWeeksPerYear,
      annualErrorCost,
      implementationCost,
      annualMaintenanceCost,
      automationCoverage,
      fteReallocationPct,
    } = inputs;

    const totalHoursPerYear = numFTEs * hoursPerWeek * workWeeksPerYear;
    const currentAnnualFTECost = numFTEs * avgFTECost;
    const currentTotalCost = currentAnnualFTECost + annualErrorCost;

    const coverage = automationCoverage / 100;
    const ftesAutomated = numFTEs * coverage;
    const ftesReallocated = ftesAutomated * (fteReallocationPct / 100);
    const ftesEliminated = ftesAutomated - ftesReallocated;

    const fteCostSavings = ftesEliminated * avgFTECost;
    const errorSavings = annualErrorCost * coverage;
    const hoursSaved = totalHoursPerYear * coverage;

    const grossAnnualBenefit = fteCostSavings + errorSavings;
    const netAnnualBenefit = grossAnnualBenefit - annualMaintenanceCost;

    const paybackMonths =
      netAnnualBenefit > 0 ? (implementationCost / netAnnualBenefit) * 12 : Infinity;

    const net1yr = netAnnualBenefit - implementationCost;
    const net3yr = netAnnualBenefit * 3 - implementationCost;
    const net5yr = netAnnualBenefit * 5 - implementationCost;

    const roi1yr =
      implementationCost > 0 ? (net1yr / implementationCost) * 100 : 0;
    const roi3yr =
      implementationCost > 0 ? (net3yr / implementationCost) * 100 : 0;
    const roi5yr =
      implementationCost > 0 ? (net5yr / implementationCost) * 100 : 0;

    return {
      currentTotalCost,
      ftesAutomated,
      ftesEliminated,
      ftesReallocated,
      hoursSaved,
      fteCostSavings,
      errorSavings,
      grossAnnualBenefit,
      netAnnualBenefit,
      paybackMonths,
      net1yr,
      net3yr,
      net5yr,
      roi1yr,
      roi3yr,
      roi5yr,
    };
  }, [inputs]);

  const paybackLabel =
    r.paybackMonths === Infinity
      ? "N/A"
      : r.paybackMonths < 12
      ? `${fmt(r.paybackMonths, 1)} months`
      : `${fmt(r.paybackMonths / 12, 1)} years`;

  return (
    <div className="w-full pt-24 pb-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground/80 text-sm font-medium mb-6">
              <Calculator size={16} />
              Free ROI Estimator
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Automation <span className="text-accent">ROI Calculator</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light">
              Enter your process details below to instantly see your projected savings in dollars and full-time equivalents.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">

          {/* ── Left: Inputs ── */}
          <div className="xl:col-span-3 space-y-8">

            {/* Section 1 */}
            <FadeIn>
              <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Current Process</h2>
                    <p className="text-sm text-muted-foreground">Who is doing this work today?</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField
                    label="Number of FTEs"
                    value={inputs.numFTEs}
                    onChange={set("numFTEs")}
                    min={0.5}
                    step={0.5}
                    tooltip="Full-time equivalents currently performing this process."
                  />
                  <InputField
                    label="Avg Annual FTE Cost"
                    value={inputs.avgFTECost}
                    onChange={set("avgFTECost")}
                    prefix="$"
                    min={0}
                    step={1000}
                    tooltip="Total annual cost per FTE including salary, benefits, and overhead."
                  />
                  <InputField
                    label="Hours per FTE per Week"
                    value={inputs.hoursPerWeek}
                    onChange={set("hoursPerWeek")}
                    suffix="hrs"
                    min={1}
                    max={60}
                    tooltip="How many hours each FTE spends on this specific process per week."
                  />
                  <InputField
                    label="Working Weeks per Year"
                    value={inputs.workWeeksPerYear}
                    onChange={set("workWeeksPerYear")}
                    suffix="wks"
                    min={1}
                    max={52}
                    tooltip="Weeks the process runs per year (typically 48–52)."
                  />
                  <div className="sm:col-span-2">
                    <InputField
                      label="Annual Error / Rework Cost"
                      value={inputs.annualErrorCost}
                      onChange={set("annualErrorCost")}
                      prefix="$"
                      min={0}
                      step={500}
                      tooltip="Estimated annual cost of errors, rework, and quality issues in this process. Enter 0 if unknown."
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Section 2 */}
            <FadeIn delay={0.1}>
              <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Automation Investment</h2>
                    <p className="text-sm text-muted-foreground">What will the automation cost?</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField
                    label="One-Time Implementation Cost"
                    value={inputs.implementationCost}
                    onChange={set("implementationCost")}
                    prefix="$"
                    min={0}
                    step={1000}
                    tooltip="Total upfront cost to design, build, and deploy the automation (licenses, development, testing)."
                  />
                  <InputField
                    label="Annual Maintenance Cost"
                    value={inputs.annualMaintenanceCost}
                    onChange={set("annualMaintenanceCost")}
                    prefix="$"
                    min={0}
                    step={500}
                    tooltip="Recurring annual cost for licensing, support, and maintenance of the automation."
                  />
                </div>
              </div>
            </FadeIn>

            {/* Section 3 */}
            <FadeIn delay={0.2}>
              <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Automation Performance</h2>
                    <p className="text-sm text-muted-foreground">How effective will the automation be?</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <SliderField
                    label="Automation Coverage"
                    value={inputs.automationCoverage}
                    onChange={set("automationCoverage")}
                    min={10}
                    max={100}
                    step={5}
                    suffix="%"
                    tooltip="Percentage of the process volume that can be fully automated (typically 60–90% for most RPA/AI use cases)."
                  />
                  <SliderField
                    label="FTE Reallocation Rate"
                    value={inputs.fteReallocationPct}
                    onChange={set("fteReallocationPct")}
                    min={0}
                    max={100}
                    step={5}
                    suffix="%"
                    tooltip="Of the FTEs freed by automation, what % will be redeployed to higher-value work (vs. headcount reduction)? Redeployed FTEs are excluded from hard cost savings."
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Results ── */}
          <div className="xl:col-span-2">
            <FadeIn delay={0.15}>
              <div className="sticky top-28 space-y-4">

                <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
                  <h2 className="text-lg font-bold mb-1">Estimated Results</h2>
                  <p className="text-sm text-muted-foreground mb-5">Updates live as you change inputs.</p>

                  <div className="space-y-3">
                    <ResultCard
                      icon={TrendingUp}
                      label="Net Annual Savings"
                      value={fmtUSD(r.netAnnualBenefit)}
                      sub={`${fmtUSD(r.grossAnnualBenefit)} gross − ${fmtUSD(inputs.annualMaintenanceCost)} maintenance`}
                      highlight
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <ResultCard
                        icon={Users}
                        label="FTEs Freed"
                        value={fmt(r.ftesAutomated, 1)}
                        sub={`${fmt(r.ftesEliminated, 1)} reduced · ${fmt(r.ftesReallocated, 1)} redeployed`}
                      />
                      <ResultCard
                        icon={Clock}
                        label="Hours Saved / yr"
                        value={fmt(r.hoursSaved)}
                        sub="across all FTEs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <ResultCard
                        icon={DollarSign}
                        label="FTE Cost Savings"
                        value={fmtUSD(r.fteCostSavings)}
                        sub="hard dollar savings"
                      />
                      <ResultCard
                        icon={Zap}
                        label="Error Cost Savings"
                        value={fmtUSD(r.errorSavings)}
                        sub="quality improvement"
                      />
                    </div>
                  </div>
                </div>

                {/* ROI Timeline */}
                <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
                  <h3 className="font-bold mb-4">ROI Timeline</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Payback Period", value: paybackLabel, sub: "Break-even point" },
                      {
                        label: "Year 1 ROI",
                        value: `${fmt(r.roi1yr, 1)}%`,
                        sub: `Net: ${fmtUSD(r.net1yr)}`,
                        positive: r.roi1yr >= 0,
                      },
                      {
                        label: "3-Year ROI",
                        value: `${fmt(r.roi3yr, 1)}%`,
                        sub: `Net: ${fmtUSD(r.net3yr)}`,
                        positive: r.roi3yr >= 0,
                      },
                      {
                        label: "5-Year ROI",
                        value: `${fmt(r.roi5yr, 1)}%`,
                        sub: `Net: ${fmtUSD(r.net5yr)}`,
                        positive: r.roi5yr >= 0,
                      },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0"
                      >
                        <div>
                          <p className="text-sm font-medium">{row.label}</p>
                          <p className="text-xs text-muted-foreground">{row.sub}</p>
                        </div>
                        <span
                          className={`text-lg font-bold ${
                            "positive" in row
                              ? row.positive
                                ? "text-green-500"
                                : "text-red-500"
                              : "text-foreground"
                          }`}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 text-center">
                  <p className="text-sm font-medium mb-1">Want a detailed ROI analysis?</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Our experts will validate these numbers and build a full business case for your stakeholders.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                  >
                    Book a Free Consultation <ChevronRight size={16} />
                  </Link>
                </div>

                <p className="text-xs text-muted-foreground text-center px-2">
                  * Estimates are illustrative. Actual results depend on process complexity, implementation quality, and organizational factors.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
