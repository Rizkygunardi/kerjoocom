const mainColors = {
  green1: '#449875',
  green2: '#79C6A9',
  dark1: '#2D3037',
  grey1: '#748094',
  yellow1: '#F6BF58',
  orange1: '#FDF0ED',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  disable: mainColors.grey1,
  tertiary: mainColors.orange1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.green2,
    },
    disable: {
      background: mainColors.white,
      text: mainColors.grey1,
    },
  },
};
