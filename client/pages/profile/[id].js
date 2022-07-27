import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Container, Box, Heading, List, ListItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ProfilePicture from '../../components/profilePicture'
import AddLinkBtn from '../../components/addLinkBtn'
const UserProfile = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const id = router.query.id
  console.log(id)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/profile/${id}`)
      .then((res) => {
        setUserData(res.data)
        setLoading(false)
        console.log(userData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])
  if (loading) {
    return <h1>loading</h1>
  } else {
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
          <List>
            <ListItem>
              <AddLinkBtn />
            </ListItem>
          </List>
        </Box>
      </Container>
    )
  }
}

export default UserProfile
