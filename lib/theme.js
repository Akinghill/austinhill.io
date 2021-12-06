import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      // bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        as: "h2"
      },
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    },
  },
  Link: {
    baseStyle: {
      color: 'green.200',
      textUnderlineOffset: 3
    }
  },
  Text: {
    variants: {
      'accent': {
        color: 'green.500'
      }
    }
  }
}

const fonts = {
  heading: "Raleway",
  body: "Raleway",
}

const colors = {
  gray: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
  },
  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const shadows = {
  green: '#a7f3d0 2px 2px 5px 3px;',
  greenHover: '#a7f3d0 2px 2px 5px 5px;',
  text: '#a7f3d0 0 7px 5px -6px;'
}

const theme = extendTheme({ styles, config, styles, components, fonts, colors, shadows })

export default theme