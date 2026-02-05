import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Pencil,
  Code,
  Rocket,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We start with a deep dive into your current workflows. What's manual? What breaks? Where do you lose time? This is a free, no-obligation audit.",
    duration: "1-2 hours",
    outcome: "Workflow map & automation opportunities",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description:
      "Based on discovery, we design a solution using our proven templates. You'll see exactly what the automation will do before we build anything.",
    duration: "2-3 days",
    outcome: "Solution blueprint & timeline",
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description:
      "We build in your environment, using your tools. No black boxes. Your IT team (if you have one) gets full visibility.",
    duration: "1-2 weeks",
    outcome: "Working automation in staging",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description:
      "We launch with a rollback plan. Your team gets trained. We monitor closely for the first 30 days to catch edge cases.",
    duration: "1-2 days",
    outcome: "Live automation + training",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Maintain",
    description:
      "Ongoing support means you're never stuck. We handle updates, troubleshooting, and optimizations as your business evolves.",
    duration: "Ongoing",
    outcome: "24/7 monitoring + priority support",
  },
];

const guarantees = [
  "No hidden fees or surprise charges",
  "Clear timelines with milestone tracking",
  "Full documentation and training",
  "Rollback capability on all deployments",
  "30-day post-launch support included",
];

export default function HowItWorks() {
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
              From chaos to clarity in{" "}
              <span className="text-gradient-accent">five steps</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Our proven process takes the guesswork out of automation. You'll
              know exactly what you're getting, when you're getting it, and how
              it will transform your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[39px] top-[100px] w-0.5 h-[calc(100%-60px)] bg-border" />
                )}

                <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                  {/* Step number and icon */}
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4 mb-4 md:mb-0">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-sm font-bold text-accent md:mt-3">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="md:col-span-4 bg-card rounded-xl p-6 shadow-soft mb-12 md:mb-16">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Duration
                        </div>
                        <div className="font-semibold text-foreground">
                          {step.duration}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Outcome
                        </div>
                        <div className="font-semibold text-foreground">
                          {step.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our commitment to you
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've seen too many automation projects fail due to poor
                communication and scope creep. That's why we're obsessive about
                transparency.
              </p>

              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {guarantee}
                    </span>
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
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Start with a free workflow audit
              </h3>
              <p className="text-muted-foreground mb-6">
                In 60 minutes, we'll map your current workflows and identify
                your biggest automation opportunities. No commitment required.
              </p>
              <Link to="/contact">
                <Button variant="accent" size="lg" className="w-full group">
                  Book Your Free Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
