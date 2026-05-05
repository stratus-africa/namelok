import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const hashRedirects: Record<string, string> = {
  "#about": "/about",
  "#services": "/services",
  "#contact": "/contact",
  "#pricing": "/pricing",
  "#hotspots": "/hotspots",
  "#coverage": "/coverage",
  "#faq": "/pricing",
  "#impact": "/about",
  "#partners": "/about",
  "#inquiry": "/contact",
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/" && hash && hashRedirects[hash]) {
      navigate(hashRedirects[hash], { replace: true });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, navigate]);

  return null;
};

export default ScrollToTop;
