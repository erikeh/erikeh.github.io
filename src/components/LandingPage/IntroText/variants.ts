import polkaDot from '../../../assets/img/textBackground/polka-dots.svg';
import redbg from '../../../assets/img/textBackground/red.jpeg';
import stingrays from '../../../assets/img/textBackground/stingrays.svg';
import charlieBrown from '../../../assets/img/textBackground/charlie-brown.svg';
import cubeStairs from '../../../assets/img/textBackground/cube-stairs.svg';
import stripe from '../../../assets/img/textBackground/stripe.svg';
import spots from '../../../assets/img/textBackground/dalmatian-spots.svg';

export const eVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    backgroundSize: '400%',
    backgroundPosition: '15% 15%',
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${polkaDot})`,
    backgroundPosition: `340% 340%`,
    transition: {
      type: 'tween',
      duration: 4,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const rVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    backgroundSize: '300%',
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${spots})`,
    backgroundPosition: `-150% 0`,
    transition: {
      backgroundPosition: {
        type: 'tween',
        duration: 2,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  },
};

export const iVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    backgroundSize: '200%',
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${charlieBrown})`,
    backgroundPosition: `0 300%`,
    transition: {
      type: 'tween',
      duration: 4,
      ease: 'easeOut',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

export const kVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${cubeStairs})`,
    backgroundSize: ['200%', '100%'],
    backgroundPosition: `50% -250%`,
    transition: {
      type: 'tween',
      duration: 4,
      ease: 'easeOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

export const oVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    backgroundSize: '300%',
    backgroundPosition: '20% 20%',
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${stingrays})`,
    backgroundPosition: `300% 300%`,
    transition: {
      type: 'tween',
      duration: 6,
      ease: 'circOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};
export const hVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${stripe})`,
    backgroundPosition: `-300% 100%`,
    transition: {
      type: 'tween',
      duration: 8,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

/** variants for intro text animation
 */

export const intro = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

export const introItem = {
  hidden: {
    opacity: 0,
    transformOrigin: 'top left',
    rotate: 25,
  },
  show: {
    rotate: 0,
    opacity: 1,
    transition: {
      opacity: {
        duration: 1,
      },
      duration: 0.8,
    },
  },
};
