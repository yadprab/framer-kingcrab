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
