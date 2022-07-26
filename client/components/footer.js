import { Link, Text, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box mt={150}>
      <Text align='center'>
        Built by{' '}
        <NextLink href='/profile'>
          <Link color='#ff63c3'>
            JaxonCodes
            <ExternalLinkIcon mx='2px' />
          </Link>
        </NextLink>
      </Text>
    </Box>
  )
}

export default Footer
