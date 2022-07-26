import {
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Image,
} from '@chakra-ui/react'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoCodeSlash,
  IoLogoTwitter,
} from 'react-icons/io5'

import Linkbtn from '../components/link-btn'
import AddLinkBtn from '../components/addLinkBtn'
import { motion } from 'framer-motion'
import ProfilePicture from '../components/profilePicture'

const Profile = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <ProfilePicture src={'/images/jaxon.jpg'} />
        </motion.div>
        <Box flexGrow={1}>
          <Heading as='h2' variant='section-title' align='center'>
            JaxonCodes
          </Heading>
        </Box>
      </Box>

      <Box mt={12}>
        <List spacing={4}>
          <ListItem>
            <Linkbtn
              href={'https://www.instagram.com/'}
              icon={<IoLogoInstagram />}
            >
              JaxonCodes
            </Linkbtn>
          </ListItem>
          <ListItem>
            <Linkbtn
              href={'https://github.com/JaxonScott'}
              icon={<IoLogoGithub />}
            >
              JaxonScott
            </Linkbtn>
          </ListItem>
          <ListItem>
            <Linkbtn
              href={'https://twitter.com/jaxoncodes'}
              icon={<IoLogoTwitter />}
            >
              Jaxoncodes
            </Linkbtn>
          </ListItem>
          <ListItem>
            <Linkbtn
              href={'https://jaxoncodes-website.vercel.app/'}
              icon={<IoCodeSlash />}
            >
              My Website
            </Linkbtn>
          </ListItem>
          <ListItem>
            <AddLinkBtn />
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}

export default Profile
