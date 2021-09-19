export const wrapAni = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    height: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const ListWrap = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const Wrap = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const Top = {
  initial: {
    rotate: 0,
    translateY: 0,
  },
  animate: {
    rotate: 45,
    translateY: 10,

    transition: {
      delay: 0.2,
    },
  },
};

export const mid = {
  initial: {
    opacity: 1,
    scaleX: 1,
  },
  animate: {
    opacity: 0,
    scaleX: 0,

    transition: {
      duration: 0.5,
    },
  },
};

export const bottom = {
  initial: {
    rotate: 0,
    translateY: 0,
  },
  animate: {
    rotate: -45,
    translateY: -2,
    transition: {
      delay: 0.2,
    },
  },
};

export const Top2 = {
  initial: {
    rotate: 45,
    translateY: 10,
  },
  animate: {
    rotate: 0,
    translateY: 0,
  },
};

export const mid2 = {
  initial: {
    opacity: 0,
    scaleX: 0,
  },
  animate: {
    opacity: 1,
    scaleX: 1,

    transition: {
      duration: 0.5,
    },
  },
};
export const bottom2 = {
  initial: {
    rotate: -45,
    translateY: -2,
  },
  animate: {
    rotate: 0,
    translateY: 0,
  },
};

