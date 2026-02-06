import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock, CheckCircle2, TrendingUp, Lock, Layers, Users } from "lucide-react";
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.5
  }
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const stats = [{
  value: "85%",
  label: "Average time saved on manual tasks"
}, {
  value: "48hrs",
  label: "Typical implementation time"
}, {
  value: "0",
  label: "Engineering hires required"
}, {
  value: "99.9%",
  label: "Uptime across client workflows"
}];
const benefits = [{
  icon: Shield,
  title: "Security-First Architecture",
  description: "Your data stays in your environment. We build on enterprise-grade infrastructure with SOC 2 compliance."
}, {
  icon: Zap,
  title: "Days, Not Months",
  description: "Template-driven builds mean common workflows go live in 48-72 hours, not quarters."
}, {
  icon: Clock,
  title: "Time Back for Your Team",
  description: "Eliminate 10-20+ hours of manual work per week. Focus on growth, not data entry."
}];
const useCases = ["Employee Onboarding", "Client Reporting", "Approval Workflows", "Data Handoffs", "Internal Operations", "Compliance Tracking"];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        
        <div className="container-wide relative">
          <div className="py-24 md:py-32 lg:py-40">
            <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-4xl">
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                  <Lock className="w-4 h-4" />
                  Security-First Automation
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
                Enterprise automation.{" "}
                
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10">
                Stop losing hours to manual workflows. PACE builds secure, scalable
                automations that eliminate repetitive tasks—without hiring
                engineers or compromising on security.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    Book a Workflow Audit
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="hero-outline" size="xl">
                    See How It Works
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm bg-background">
        <div className="container-wide">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container-wide">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Why operations leaders choose PACE
            </h2>
            <p className="text-lg text-muted-foreground">
              We bring enterprise-grade automation to growing businesses—without
              the enterprise price tag or complexity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-accent border-cyan-950 border-2">
                  <benefit.icon className="w-6 h-6 bg-accent-foreground text-sky-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Automate the workflows that slow you down
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From employee onboarding to client reporting, we've built
                templates for the operational bottlenecks that cost SMBs the
                most time.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {useCases.map((useCase, index) => <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{useCase}</span>
                  </div>)}
              </div>

              <Link to="/solutions">
                <Button variant="default" size="lg" className="group">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="relative">
              <div className="bg-card-gradient rounded-2xl p-8 shadow-prominent">
                <div className="space-y-4">
                  {[{
                  icon: Users,
                  label: "New hire detected in HRIS",
                  status: "complete"
                }, {
                  icon: Layers,
                  label: "Accounts provisioned",
                  status: "complete"
                }, {
                  icon: TrendingUp,
                  label: "Welcome email sent",
                  status: "complete"
                }, {
                  icon: CheckCircle2,
                  label: "Manager notified",
                  status: "active"
                }].map((step, index) => <div key={index} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${step.status === "active" ? "bg-accent/10 border border-accent/20" : "bg-muted/50"}`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.status === "active" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span className={`font-medium ${step.status === "active" ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.label}
                      </span>
                      {step.status === "complete" && <CheckCircle2 className="w-5 h-5 text-accent ml-auto" />}
                    </div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-tight text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to eliminate operational friction?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Book a free workflow audit. We'll identify your biggest automation
              opportunities and show you what's possible.
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
    </Layout>;
};
export default Index;