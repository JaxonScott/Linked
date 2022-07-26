import {
  Container,
  Box,
  Heading,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import MovingModel from '../components/movingModel'

const Page = () => {
  return (
    <Container mt={12}>
      <Box>
        <MovingModel />
      </Box>
      <Box>
        <Heading as='h2'>
          Welcome to{' '}
          <span
            style={{
              fontWeight: 'bold',
              textDecoration: 'underline',
              textDecorationColor: 'teal',
              textDecorationThickness: '3px',
            }}
          >
            Linked
          </span>
        </Heading>
        <Text fontSize='lg'>
          The web app the allows you to seamlessly link all your social medias
          in one place!
        </Text>
        <Divider my={6} />
      </Box>
      <Box>
        <NextLink href='/signup'>
          <Button w='100%' bg='teal'>
            Sign Up
          </Button>
        </NextLink>
        <NextLink href='/login'>
          <Button w='100%' bg='teal' mt={2}>
            Log in
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Page
