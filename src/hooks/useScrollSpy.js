import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const defaultOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, defaultOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
};

export default useScrollSpy;