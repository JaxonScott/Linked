import {
  Container,
  Text,
  Button,
  Box,
  Divider,
  Heading,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import MovingModel from '../components/movingModel'

const NotFound = () => {
  return (
    <Container textAlign='center'>
      <MovingModel />
      <Heading as='h1'>Page Not Found</Heading>
      <Text>Sorry but the page you are looking for can not be found.</Text>
      <Divider my={6} />
      <Box>
        <NextLink href='/'>
          <Button bg='teal' fontSize='xl'>
            Return Home
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
