import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Check, HelpCircle } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    description: "For teams automating their first workflow",
    initiation: "$2,500",
    monthly: "$500",
    features: [
      "1 workflow automation",
      "Up to 3 integrations",
      "Email support",
      "Documentation & training",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For operations teams with multiple workflows",
    initiation: "$5,000",
    monthly: "$1,000",
    features: [
      "Up to 3 workflow automations",
      "Unlimited integrations",
      "Priority support",
      "Quarterly optimization reviews",
      "Custom reporting",
      "Dedicated success manager",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with complex requirements",
    initiation: "Custom",
    monthly: "Custom",
    features: [
      "Unlimited workflows",
      "Custom integrations",
      "24/7 priority support",
      "On-site training available",
      "SLA guarantees",
      "Security review included",
      "Dedicated engineering team",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in the initiation fee?",
    answer:
      "The initiation fee covers discovery, design, build, deployment, and the first 30 days of support. It's a one-time cost per project.",
  },
  {
    question: "What does the monthly fee cover?",
    answer:
      "Monthly fees cover ongoing monitoring, maintenance, bug fixes, and minor enhancements. It also includes priority support and regular check-ins.",
  },
  {
    question: "Can I cancel the monthly subscription?",
    answer:
      "Yes, you can cancel with 30 days notice. Your automations will continue to run—you just won't have ongoing support or monitoring.",
  },
  {
    question: "What if my needs change?",
    answer:
      "You can upgrade or add workflows at any time. We'll work with you to find the right plan as your needs evolve.",
  },
  {
    question: "Do you offer a trial or pilot?",
    answer:
      "We offer a free workflow audit that gives you a clear picture of what we'd build and expected ROI. This helps you evaluate before committing.",
  },
  {
    question: "What's the typical ROI?",
    answer:
      "Most clients see ROI within 2-3 months. We typically save 10-20 hours per week of manual work, which adds up quickly at typical salary costs.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Simple, transparent{" "}
              <span className="text-gradient-accent">pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              One-time initiation fee plus predictable monthly maintenance. No
              surprises, no hidden costs, no scope creep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? "bg-primary text-primary-foreground shadow-prominent"
                    : "bg-card shadow-soft"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-display font-bold mb-2 ${
                      tier.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      tier.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-display font-bold ${
                        tier.popular ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {tier.initiation}
                    </span>
                    <span
                      className={`text-sm ${
                        tier.popular
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      initiation
                    </span>
                  </div>
                  <div
                    className={`text-sm mt-1 ${
                      tier.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    + {tier.monthly}/month maintenance
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.popular ? "text-accent" : "text-accent"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.popular
                            ? "text-primary-foreground/90"
                            : "text-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button
                    variant={tier.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Callout */}
      <section className="section-padding-sm bg-subtle-gradient">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Calculate your ROI
                </h2>
                <p className="text-muted-foreground mb-6">
                  Most clients save 10-20 hours per week on manual tasks. At a
                  typical loaded cost of $50-75/hour, that's $2,000-6,000 per
                  month in recovered productivity.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our average client sees full ROI within 2-3 months of launch.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Hours saved/week</span>
                    <span className="font-bold text-foreground">15 hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Hourly cost</span>
                    <span className="font-bold text-foreground">$60</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        Monthly savings
                      </span>
                      <span className="text-2xl font-bold text-accent">$3,600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to see your ROI?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Book a free workflow audit. We'll identify your automation
              opportunities and give you a clear ROI projection.
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
