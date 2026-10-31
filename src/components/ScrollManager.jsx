import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't touch scroll position on navigation, so without this
// every route change keeps whatever scroll offset the previous page had.
// This also makes links like "/#services" actually scroll to the section
// once the new page has rendered.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick for the destination page to render before measuring it.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      });
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
