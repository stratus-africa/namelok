import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/namelok-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Hotspots", to: "/hotspots" },
  { label: "Coverage", to: "/coverage" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3",
        scrolled && "py-2",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 relative z-10 shrink-0">
          <img src={logo} alt="Namelok Wireless" className="h-10 w-auto" />
          <span className="hidden sm:inline font-serif text-lg font-semibold text-foreground">
            Namelok
          </span>
        </Link>

        {/* Desktop pill nav */}
        <div className="hidden lg:flex items-center gap-1 bg-card/80 backdrop-blur-xl border border-border/60 shadow-sm rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Button asChild size="sm" className="rounded-full gap-2">
            <a href="https://billing.namelok.net" target="_blank" rel="noopener noreferrer">
              Client Portal
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2.5 rounded-full bg-card/80 backdrop-blur-xl border border-border/60 hover:bg-foreground/5 transition-colors relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none",
        )}
      >
        <div className="mx-4 mt-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-2xl p-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "font-medium py-3 px-4 rounded-xl transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2 mt-2 border-t border-border">
              <Button asChild className="rounded-full w-full gap-2">
                <a href="https://billing.namelok.net" target="_blank" rel="noopener noreferrer">
                  Client Portal
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
