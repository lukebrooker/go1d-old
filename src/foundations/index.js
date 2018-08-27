import Color from 'color'

/**
 * Color utilities
 */

export const opacify = (hexColor, opacity = 1) =>
  Color(hexColor).fade(1 - opacity).string()

export const darken = (hexColor, ration = 1) =>
  Color(hexColor).darken(ration).rgb().string()

export const isDark = (color) =>
  Color(color).isDark()

export const getContrastColor = (color) =>
  isDark(color) ? 'lightest' : 'darkest'

/**
 * Color
 */

const brandAccent = '#31B8DA'

// export const brandGreys = {
//   darkest: '#121F22',
//   darker: '#333e41',
//   dark: '#586164',
//   grey: '#7f8688',
//   light: '#a7adae',
//   lighter: '#d3d5d6',
//   lightest: '#ffffff'
// }

export const brandGreys = {
  darkest: '#121F22',
  darker: '#36464B',
  dark: '#798A8F',
  grey: '#C7D5DB',
  light: '#E6EEF2',
  lighter: '#F1F6F9',
  lightest: '#ffffff'
}

// #043341 #32515d #59717b #81929b #a9b5bb #d3dadc #ffffff

export const themedGreys = {
  lightMode: {
    contrast: brandGreys.darkest,
    default: brandGreys.darker,
    subtle: brandGreys.dark,
    muted: brandGreys.grey,
    divide: opacify(brandGreys.darker, 0.08),
    faded: brandGreys.light,
    soft: brandGreys.lighter,
    background: brandGreys.lightest
  },
  darkMode: {
    contrast: brandGreys.lightest,
    default: brandGreys.lighter,
    subtle: brandGreys.light,
    muted: brandGreys.grey,
    divide: opacify(brandGreys.lighter, 0.08),
    faded: brandGreys.dark,
    soft: brandGreys.darker,
    background: brandGreys.darkest
  }
}

const getGreys = (greys = themedGreys, darkMode) => (
  darkMode ? greys.darkMode : greys.lightMode
)

const brandStatuses = {
  green: '#51C133',
  yellow: '#FFDE00',
  orange: '#F6941D',
  red: '#DA3131'
}

export const gradients = {
  warmOverlay: 'linear-gradient(179.89deg, rgba(255, 255, 239, 0.05) -14.1%, rgba(255, 255, 191, 1e-05) 99.8%),',
  lightWarmOverlay: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
  darkWarmOverlay: 'linear-gradient(0deg, rgba(18, 31, 34, 0.05), rgba(18, 31, 34, 0.05)), linear-gradient(179.89deg, rgba(255, 255, 239, 0.05) -14.1%, rgba(255, 255, 191, 1e-05) 99.8%)'
}

export const generateColors = ({
  accent = brandAccent,
  greys = themedGreys,
  darkMode,
  statuses = brandStatuses
} = {}) => ({
  accent,
  ...getGreys(greys, darkMode),
  highlight: opacify(accent, 0.15),
  success: statuses.green,
  note: statuses.yellow,
  warning: statuses.orange,
  danger: statuses.red,
  gradients
})

export const colors = generateColors()

/**
 * Shadows
 */

export const shadows = {
  crisp: `0px 1px 2px ${opacify(colors.contrast, 0.1)}, 1px 1px 35px ${opacify(colors.contrast, 0.03)}`,
  soft: `0px 1px 3px ${opacify(colors.contrast, 0.06)}, 0px 4px 6px ${opacify(colors.contrast, 0.08)}`,
  strong: `0px 3px 6px ${opacify(colors.contrast, 0.08)}, 0px 7px 14px ${opacify(colors.contrast, 0.1)}`,
  distant: `1px 3px 9px ${opacify(colors.contrast, 0.08)}, 2px 20px 38px ${opacify(colors.contrast, 0.1)}`,
  inner: `inset 1px 1px 5px ${opacify(colors.contrast, 0.1)}`,
  text: `1px 1px 1px ${opacify(colors.contrast, 0.07)}`
}

/**
 * Type
 */

const defaultFontFamily =
  "-apple-system,BlinkMacSystemFont,helvetica,'helvetica neue',ubuntu,roboto,noto,'segoe ui',arial,sans-serif"
const sansSerif = "'Muli', " + defaultFontFamily
const monospace = "'Source Code Pro', 'Menlo', monospace"

export const type = {
  scale: {
    sm: [0, 14, 16, 18, 21, 24, 28, 32, 37],
    md: [0, 13, 16, 19, 23, 28, 33, 40, 48],
    lg: [0, 13, 16, 20, 25, 31, 39, 49, 61]
  },
  family: {
    sansSerif,
    display: sansSerif,
    prose: sansSerif,
    ui: sansSerif,
    mono: monospace
  },
  weight: {
    normal: 400,
    bold: 600
  },
  leading: {
    display: 1,
    ui: 1.25,
    prose: 1.5
  },
  tracking: {
    tightest: '-0.03em',
    tight: '-0.01em',
    normal: 0
  }
}

/**
 * Spacing
 */

export const spacing = [
  '0',
  '4',
  '8',
  '16',
  '24',
  '32',
  '48',
  '64',
  '128',
  '256'
]

/**
 * Transitions
 */

const transitions = {
  subtle: 'all .15s ease'
}

/**
 * Breakpoints
 */

export const breakpoints = {
  sm: '@media(max-width: 599px)',
  md: '@media(min-width: 600px)',
  lg: '@media(min-width: 1100px)'
}

export const generateTheme = ({
  accent = brandAccent,
  greys = themedGreys,
  darkMode,
  statuses = brandStatuses,
  theme = {}
} = {}) => ({
  colors: generateColors({ accent, greys, darkMode, statuses }),
  type,
  spacing,
  shadows,
  transitions,
  breakpoints,
  ...theme
})

const foundations = generateTheme()

export default foundations
