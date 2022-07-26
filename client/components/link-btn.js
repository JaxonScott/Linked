import { Button } from '@chakra-ui/react'
import Link from 'next/link'

const Linkbtn = ({ children, href, icon }) => {
  return (
    <Link href={href} target='_blank'>
      <Button
        leftIcon={icon}
        bg='teal'
        color='whiteAlpha'
        w='100%'
        fontSize='2xl'
        p={6}
      >
        {children}
      </Button>
    </Link>
  )
}

export default Linkbtn
