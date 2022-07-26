import Logo from '../logo'
import Footer from '../footer'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Linked - JaxonCodes</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@400;500&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Container mt={5}>
        <Logo />
      </Container>
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
      <Container>
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
