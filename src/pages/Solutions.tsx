import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  FileText,
  CheckSquare,
  RefreshCw,
  Settings,
  ClipboardList,
} from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Employee Onboarding",
    description:
      "New hire triggers automatic account provisioning, equipment requests, training assignments, and manager notifications. Zero manual handoffs.",
    benefits: [
      "Reduce onboarding time by 75%",
      "Eliminate forgotten steps",
      "Consistent experience for every hire",
    ],
    industries: ["All industries"],
  },
  {
    icon: FileText,
    title: "Client Reporting",
    description:
      "Aggregate data from multiple sources, generate branded reports, and deliver on schedule. Your team stops copy-pasting forever.",
    benefits: [
      "Save 10+ hours per reporting cycle",
      "Reduce errors to zero",
      "Deliver reports faster",
    ],
    industries: ["Financial Services", "Agencies", "Consulting"],
  },
  {
    icon: CheckSquare,
    title: "Approval Workflows",
    description:
      "Route requests to the right approvers based on type, amount, or department. Automatic escalation for stuck items.",
    benefits: [
      "Cut approval times by 80%",
      "Full audit trail",
      "Mobile-friendly approvals",
    ],
    industries: ["Healthcare", "Finance", "Legal"],
  },
  {
    icon: RefreshCw,
    title: "Data Handoffs",
    description:
      "When data changes in one system, automatically sync to others. No more export-import cycles or stale information.",
    benefits: [
      "Real-time data consistency",
      "Eliminate duplicate entry",
      "Reduce sync errors",
    ],
    industries: ["Operations", "Sales", "Finance"],
  },
  {
    icon: Settings,
    title: "Internal Operations",
    description:
      "From expense processing to inventory alerts, automate the operational tasks that keep your business running smoothly.",
    benefits: [
      "Free up operations team",
      "Faster processing times",
      "Better visibility",
    ],
    industries: ["All industries"],
  },
  {
    icon: ClipboardList,
    title: "Compliance Tracking",
    description:
      "Automate compliance checklists, deadline reminders, and documentation. Never miss a regulatory requirement again.",
    benefits: [
      "Reduce compliance risk",
      "Automatic reminders",
      "Centralized documentation",
    ],
    industries: ["Healthcare", "Financial Services", "Legal"],
  },
];

export default function Solutions() {
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
              Solutions for{" "}
              <span className="text-gradient-accent">real workflows</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We've automated these workflows dozens of times. Our templates
              mean faster deployment and fewer surprises—you get proven
              solutions, not experiments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Common in
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Don't see your workflow?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              These are our most common solutions, but we build custom automations
              too. If it involves moving data between systems or eliminating
              manual steps, we can probably automate it.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg" className="group">
                Tell Us What You Need
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
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
              Ready to automate?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Book a free workflow audit and we'll identify which of these
              solutions (or custom ones) will have the biggest impact for your
              team.
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
