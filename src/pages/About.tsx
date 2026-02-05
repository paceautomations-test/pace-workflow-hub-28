import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcomes Over Output",
    description:
      "We measure success by hours saved and errors eliminated, not lines of code written or features shipped.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "No black boxes. You see exactly what we build, how it works, and why. Your team owns everything.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    description:
      "We're not here to launch and leave. We succeed when your automations keep running smoothly for years.",
  },
];

export default function About() {
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
              Built by operators,{" "}
              <span className="text-gradient-accent">for operators</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              PACE exists because we've been where you are—drowning in manual
              processes, unable to hire fast enough, watching opportunities slip
              by while we copy-pasted data between systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Before PACE, our founder spent a decade building operations at
                  high-growth startups. The pattern was always the same: as
                  companies scaled, manual processes that worked at 10 people
                  became bottlenecks at 50.
                </p>
                <p>
                  The options were limited. Hire expensive engineers to build
                  custom solutions. Struggle with no-code tools that couldn't
                  handle real complexity. Or keep throwing people at the
                  problem.
                </p>
                <p>
                  PACE was founded to provide a better path: enterprise-grade
                  automation delivered by specialists who understand both the
                  technology and the business reality of growing companies.
                </p>
                <p>
                  We're not a traditional consulting firm. We're operators who
                  happen to be really good at automation. We build what we'd
                  want if we were still running ops.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-elevated"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground">
                    Workflows automated
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    10,000+
                  </div>
                  <div className="text-muted-foreground">
                    Hours saved for clients
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    99.9%
                  </div>
                  <div className="text-muted-foreground">
                    Automation uptime
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    0
                  </div>
                  <div className="text-muted-foreground">
                    Security incidents
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              What we believe
            </h2>
            <p className="text-lg text-muted-foreground">
              Our values guide every decision we make and every automation we
              build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
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
              Let's talk operations
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Whether you're ready to automate or just want to explore what's
              possible, we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get in Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
