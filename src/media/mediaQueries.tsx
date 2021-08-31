import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';

interface MediaScreenSizes {
  small: ThemedCssFunction<DefaultTheme>;
  medium: ThemedCssFunction<DefaultTheme>;
  large: ThemedCssFunction<DefaultTheme>;
  extraLarge: ThemedCssFunction<DefaultTheme>;
}

const sizes = {
  small: 500,
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
}, {} as MediaScreenSizes);
