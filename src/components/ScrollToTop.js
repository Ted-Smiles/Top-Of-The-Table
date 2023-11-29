import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Function to move the page position to top whenever there is a page change
 */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}