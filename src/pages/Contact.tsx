import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@paceworks.io",
    href: "mailto:hello@paceworks.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-first, US-based",
    href: null,
  },
];

const workflowOptions = [
  "Employee Onboarding",
  "Client Reporting",
  "Approval Workflows",
  "Data Handoffs",
  "Internal Operations",
  "Compliance Tracking",
  "Other / Not Sure",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    workflow: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thanks for reaching out! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      workflow: "",
      message: "",
    });
    setIsSubmitting(false);
  };

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
              Let's eliminate your{" "}
              <span className="text-gradient-accent">operational friction</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Book a free workflow audit, or just tell us what's on your mind.
              We respond to every inquiry within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  Book a Workflow Audit
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll schedule a 60-minute call to
                  map your workflows and identify automation opportunities.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Smith"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Work email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jane@company.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Corp"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="workflow"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      What workflow are you looking to automate?
                    </label>
                    <select
                      id="workflow"
                      value={formData.workflow}
                      onChange={(e) =>
                        setFormData({ ...formData, workflow: e.target.value })
                      }
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select an option</option>
                      {workflowOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Tell us more (optional)
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="What's your biggest operational bottleneck? What tools are you currently using?"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Book My Free Audit
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    Other ways to reach us
                  </h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">
                            {method.label}
                          </div>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="font-medium text-foreground hover:text-accent transition-colors"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <div className="font-medium text-foreground">
                              {method.value}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <h3 className="font-display font-bold text-foreground mb-4">
                    What to expect
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Response within 24 hours",
                      "60-minute discovery call",
                      "Workflow map & opportunity analysis",
                      "No-obligation proposal",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted rounded-2xl p-6">
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Prefer to schedule directly?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Skip the form and book a time that works for you.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Calendar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
