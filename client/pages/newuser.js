import {
  Container,
  Heading,
  Box,
  Divider,
  Button,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import ProfilePicture from '../components/profilePicture'
import AddLinkBtn from '../components/addLinkBtn'

const NewUser = () => {
  return (
    <Container mt={8}>
      <Heading>
        Welcome To{' '}
        <span
          style={{
            fontWeight: 'bold',
            textDecoration: 'underline',
            textDecorationColor: 'teal',
            textDecorationThickness: '3px',
          }}
        >
          Linked
        </span>{' '}
        username! Let&apos;s get started.
      </Heading>

      <Box mt={10} align='center'>
        <ProfilePicture src={'images/default-pfp.jpg'} />
        <NextLink href='/'>
          <Link color='#ff63c3' fontSize='sm'>
            change picture
          </Link>
        </NextLink>
      </Box>
      <Box mt={10} align='center'>
        <Heading
          as='h1'
          size='lg'
          mb={4}
          textDecoration='underline'
          textDecorationColor='teal'
          textDecorationThickness='3px'
        >
          Start adding links
        </Heading>
        <Divider my={6} />
        <AddLinkBtn />
      </Box>
      <Divider my={6} />
      <Box mt={10} align='end'>
        <Button bg='teal' color='whiteAlpha' fontSize='lg' p={5}>
          Finish
        </Button>
      </Box>
    </Container>
  )
}

export default NewUser
