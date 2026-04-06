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
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Namelok Wireless" className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-background/60 text-sm leading-relaxed">
              Community-rooted internet service provider bridging the digital divide in Kajiado West, Kenya.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-background/80">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-background/80">Connect</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>
                <a href="mailto:info@namelokwireless.co.ke" className="hover:text-background transition-colors">
                  info@namelokwireless.co.ke
                </a>
              </li>
              <li>
                <a href="https://billing.namelok.net" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  Client Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Namelok Wireless. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
