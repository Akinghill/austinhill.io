import '@/styles/globals.css'
import '@/styles/typewriter.css';

import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import MainLayout from '@/components/layouts/MainLayout'
import theme from '@/lib/theme'

import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/400.css"

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  )
}

export default App
