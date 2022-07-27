import { useEffect, useState } from 'react'
import axios from 'axios'
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
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/user/profile', {
        header: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data)
        setLoading(false)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
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
          <ProfilePicture
            src={
              userData.profilePicture === ''
                ? '/images/default-pfp.jpg'
                : userData.profilePicture
            }
          />
        </motion.div>
        <Box flexGrow={1}>
          <Heading as='h2' variant='section-title' align='center'>
            {userData.username}
          </Heading>
        </Box>
      </Box>

      <Box mt={12}>
        <List spacing={4}>
          <ListItem>
            <AddLinkBtn />
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}

export default Profile
