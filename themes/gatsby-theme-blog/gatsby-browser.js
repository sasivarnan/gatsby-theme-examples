import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import tokens from './src/components/tokens'
require("prismjs/themes/prism-solarizedlight.css")

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={tokens}>{element}</ThemeProvider>
}
