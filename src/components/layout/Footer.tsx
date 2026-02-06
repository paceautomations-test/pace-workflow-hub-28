import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import paceLogo from "@/assets/pace-logo.png";

const navigation = {
  product: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Why PACE", href: "/why-pace" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Book a Call", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src={paceLogo} alt="Pace" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Enterprise-level workflow automation for growing businesses. Security-first, built to scale.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4 text-primary-foreground/90">
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4 text-primary-foreground/90">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display font-semibold text-sm mb-4 text-primary-foreground/90">
              Get Started
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-sm text-accent hover:text-emerald-400 transition-colors font-medium"
            >
              Book a Workflow Audit
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} PACE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
