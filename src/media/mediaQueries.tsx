import { css } from 'styled-components';

const sizes = {
  small: 600,
  medium: 680,
  large: 870,
  extraLarge: 1200,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
