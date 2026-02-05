import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  DollarSign,
  Layers,
  Headphones,
  CheckCircle2,
  X,
} from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Security-First Architecture",
    description:
      "We build in your environment, using your infrastructure. Your data never leaves systems you control. SOC 2 compliant practices throughout.",
  },
  {
    icon: Zap,
    title: "Faster Than Custom Builds",
    description:
      "Our template library means common workflows deploy in days, not months. You get battle-tested solutions, not prototypes.",
  },
  {
    icon: DollarSign,
    title: "Cheaper Than Hiring",
    description:
      "A single automation engineer costs $150K+/year. We deliver multiple automations for a fraction of that—with guaranteed outcomes.",
  },
  {
    icon: Layers,
    title: "Template-Driven Approach",
    description:
      "We've automated these workflows before. Our templates reduce risk and accelerate deployment while maintaining customization where it matters.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support Included",
    description:
      "Automations break when things change. We monitor, maintain, and evolve your workflows as your business grows. No orphaned projects.",
  },
];

const comparison = [
  {
    category: "Time to value",
    pace: "Days to weeks",
    inHouse: "3-6 months",
    diy: "Months of trial and error",
  },
  {
    category: "Security expertise",
    pace: "Enterprise-grade, built-in",
    inHouse: "Depends on hire",
    diy: "Often overlooked",
  },
  {
    category: "Ongoing cost",
    pace: "Predictable monthly fee",
    inHouse: "$150K+/year + benefits",
    diy: "Hidden maintenance burden",
  },
  {
    category: "Scalability",
    pace: "Built for growth",
    inHouse: "Limited by headcount",
    diy: "Breaks under load",
  },
  {
    category: "Support",
    pace: "Dedicated team",
    inHouse: "Single point of failure",
    diy: "You're on your own",
  },
];

export default function WhyPace() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Why teams choose{" "}
              <span className="text-gradient-accent">PACE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              You could hire an engineer, struggle with no-code tools, or partner
              with an agency that disappears after launch. Here's why growing
              businesses choose PACE instead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              How we compare
            </h2>
            <p className="text-lg text-muted-foreground">
              We've seen companies try every approach to automation. Here's the
              honest comparison.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-left font-display font-bold text-foreground"></th>
                  <th className="py-4 px-4 text-center">
                    <div className="bg-accent/10 rounded-lg py-3 px-4">
                      <span className="font-display font-bold text-accent">PACE</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center font-display font-semibold text-muted-foreground">
                    Hire In-House
                  </th>
                  <th className="py-4 px-4 text-center font-display font-semibold text-muted-foreground">
                    DIY / No-Code
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium text-foreground">
                      {row.category}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-foreground font-medium">{row.pace}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">
                      {row.inHouse}
                    </td>
                    <td className="py-4 px-4 text-center text-muted-foreground">
                      {row.diy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Security Deep Dive
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your data stays where it belongs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unlike platforms that route your data through their servers, we
                build directly in your environment. You maintain full control.
              </p>

              <div className="space-y-4">
                {[
                  "Automations run in your cloud environment",
                  "Credentials never leave your systems",
                  "SOC 2 Type II compliant practices",
                  "Full audit logging and access controls",
                  "Regular security reviews included",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-elevated"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Common security concerns we address
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: "Where does my data go?",
                    answer: "Nowhere but your systems. We build in your environment.",
                  },
                  {
                    question: "Who has access?",
                    answer: "Only the people you authorize. We use your IAM.",
                  },
                  {
                    question: "What about compliance?",
                    answer: "We follow SOC 2 practices and can work with your compliance team.",
                  },
                  {
                    question: "Can I audit the automations?",
                    answer: "Yes. Full visibility, documentation, and change logs.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b border-border/50 pb-4 last:border-0">
                    <div className="font-medium text-foreground mb-1">
                      {item.question}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              See PACE in action
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Book a workflow audit and we'll show you exactly how we'd automate
              your specific processes—with a timeline and cost estimate.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book Your Free Audit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
