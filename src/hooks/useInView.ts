import { useState, useEffect, useRef } from "react";

const useInView = (
  options: IntersectionObserverInit = {
    root: null, // use the viewport as the container
    rootMargin: "0px",
    threshold: 0.3, // trigger when 10% of the div is in view
  },
) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};

export default useInView;
