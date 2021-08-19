import polkaDot from '../../assets/img/polka-dots.svg';
import rainbowVortex from '../../assets/img/rainbow-vortex.svg';
import diamondSunset from '../../assets/img/diamond-sunset.svg';
import swirl from '../../assets/img/swirl.jpg';
import terrazzo from '../../assets/img/terrazzo.jpg';
import redbg from '../../assets/img/red.jpeg';

export const eVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${polkaDot})`,
    backgroundPosition: `300% 300%`,
    transition: {
      type: 'tween',
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

export const rVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${rainbowVortex})`,
    backgroundPosition: `300% 150%`,
    transition: {
      type: 'tween',
      duration: 7,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

export const iVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${diamondSunset})`,
    backgroundPosition: `300% 300%`,
    transition: {
      type: 'tween',
      duration: 3,
      ease: 'linear',
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
    backgroundImage: `url(${polkaDot})`,
    backgroundPosition: `300% 300%`,
    transition: {
      type: 'tween',
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

export const oVariant = {
  initial: {
    backgroundImage: `url(${redbg})`,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${swirl})`,
    backgroundPosition: `300% 300%`,
    transition: {
      type: 'tween',
      duration: 6,
      ease: 'circIn',
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