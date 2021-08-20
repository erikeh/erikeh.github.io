import polkaDot from '../../assets/img/polka-dots.svg';
import rainbowVortex from '../../assets/img/rainbow-vortex.svg';
import diamondSunset from '../../assets/img/diamond-sunset.svg';
import swirl from '../../assets/img/swirl.jpg';
import terrazzo from '../../assets/img/terrazzo.jpg';
import redbg from '../../assets/img/red.jpeg';
import lego from '../../assets/img/lego.jpg';
import forest from '../../assets/img/forest.jpg';

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
    // backgroundSize: '450% 450%',
    backgroundPosition: `340% 340%`,
    transition: {
      type: 'tween',
      duration: 4,
      ease: 'linear',
      repeat: Infinity,
      // repeatType: 'mirror',
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
    backgroundSize: '500%',
    backgroundPosition: '20% 20%',
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    backgroundImage: `url(${swirl})`,
    backgroundPosition: `300% 300%`,
    // transformOrigin: 'center',
    backgroundSize: '500%',
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

