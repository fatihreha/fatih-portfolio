import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px' } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(imgElement);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(imgElement);

    return () => {
      observer.unobserve(imgElement);
    };
  }, [threshold, rootMargin]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return {
    imgRef,
    isLoaded,
    isInView,
    handleLoad,
  };
};