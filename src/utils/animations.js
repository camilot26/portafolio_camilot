// Animation variants for Framer Motion

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  })
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -60
  },
  animate: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  })
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -60
  },
  animate: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  })
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 60
  },
  animate: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  })
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: custom * 0.1,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  })
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInFromBottom = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut"
  }
};

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: "easeOut"
  }
};

// Entrance animations for different elements
export const heroAnimations = {
  greeting: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  },
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4 }
    }
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.8 }
    }
  },
  description: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 1.0 }
    }
  },
  buttons: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 1.2 }
    }
  },
  image: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 1.4 }
    }
  }
};

// Card animations
export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

// Floating animations
export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Text reveal animations
export const textReveal = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

// Progress bar animation
export const progressBar = {
  initial: { width: 0 },
  animate: (width) => ({
    width: `${width}%`,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5
    }
  })
};

// Loading animations
export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Modal animations
export const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};

export const modalContent = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: { 
    duration: 0.3,
    ease: [0.25, 0.25, 0.25, 0.75]
  }
};

export default {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  slideInFromBottom,
  pageTransition,
  hoverScale,
  tapScale,
  heroAnimations,
  cardHover,
  floatingAnimation,
  textReveal,
  progressBar,
  loadingSpinner,
  modalOverlay,
  modalContent
};