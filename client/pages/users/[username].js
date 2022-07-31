import { Container, Box, Heading, List, ListItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IoLink } from 'react-icons/io5'
import ProfilePicture from '../../components/profilePicture'
import Linkbtn from '../../components/link-btn'
const Users = ({ data }) => {
  console.log(data)

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
              data.profilePicture === ''
                ? '/images/default-pfp.jpg'
                : userData.profilePicture
            }
          />
        </motion.div>
        <Box flexGrow={1}>
          <Heading as='h2' variant='section-title' align='center'>
            {data.username}
          </Heading>
        </Box>
      </Box>
      <Box mt={12}>
        <List spacing={4}>
          {data.links.map((link) => {
            return (
              <ListItem>
                <Linkbtn href={link.link} icon={<IoLink />}>
                  {link.title}
                </Linkbtn>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Container>
  )
}

export async function getServerSideProps(ctx) {
  const username = ctx.query.username
  const res = await fetch(`http://localhost:3001/api/user/profile/${username}`)
  const data = await res.json()
  return { props: { data } }
}

export default Users
