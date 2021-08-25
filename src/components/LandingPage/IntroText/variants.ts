import polkaDot from '../../../assets/img/textBackground/polka-dots.svg';
import rainbowVortex from '../../../assets/img/textBackground/rainbow-vortex.svg';
import terrazzo from '../../../assets/img/textBackground/terrazzo.jpg';
import redbg from '../../../assets/img/textBackground/red.jpeg';
import lego from '../../../assets/img/textBackground/lego.jpg';
import forest from '../../../assets/img/textBackground/forest.jpg';
import stingrays from '../../../assets/img/textBackground/stingrays.svg';

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

// find a better svg
export const rVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    backgroundPosition: `--20% 0%`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${rainbowVortex})`,
    backgroundPosition: `-220% 36%`,
    transition: {
      paddingLeft: {
        duration: 0.5,
      },
      paddingRight: {
        duration: 0.5,
      },
      type: 'tween',
      duration: 7,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

// find a better svg
export const iVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${forest})`,
    backgroundPosition: `0% 300%`,
    transition: {
      paddingLeft: {
        duration: 0.5,
      },
      paddingRight: {
        duration: 0.5,
      },
      type: 'tween',
      duration: 7,
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
    backgroundImage: `url(${lego})`,
    backgroundPosition: `20% -250%`,
    transition: {
      type: 'spring',
      duration: 12,
      ease: 'circOut',
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
    // transformOrigin: 'center',
    backgroundSize: '300%',
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
    backgroundImage: `url(${terrazzo})`,
    backgroundPosition: `-300% 100%`,
    transition: {
      type: 'tween',
      duration: 12,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

// variants for intro text animation
export const intro = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
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
      type: 'tween',
      ease: 'easeOut',
      duration: 0.8,
    },
  },
};