import { ArrowUp } from "lucide-react";
import logo from "@/assets/namelok-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Impact", href: "#impact" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Namelok Wireless" className="h-12 w-auto mb-5 brightness-200" />
            <p className="text-background/50 text-sm leading-relaxed max-w-sm">
              Community-rooted internet service provider bridging the digital divide in Kajiado West, Kenya. Powering connectivity, empowering communities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs mb-5 uppercase tracking-widest text-background/40">Navigate</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-background/50 hover:text-background transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs mb-5 uppercase tracking-widest text-background/40">Connect</h4>
            <ul className="space-y-3 text-sm text-background/50">
              <li>
                <a href="mailto:info@namelokwireless.co.ke" className="hover:text-background transition-colors">
                  info@namelokwireless.co.ke
                </a>
              </li>
              <li>
                <a href="https://billing.namelok.net" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  Client Portal →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-background/10">
          <p className="text-background/30 text-sm">
            © {new Date().getFullYear()} Namelok Wireless
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center text-background/30 hover:text-background hover:border-background/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
