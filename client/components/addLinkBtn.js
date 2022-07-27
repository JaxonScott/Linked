import axios from 'axios'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
  Input,
  Box,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import { createLinkSchema } from '../schemas'

const onSubmit = async (values, actions) => {
  console.log(values)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  actions.resetForm()
}

const AddLinkBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      platform: '',
      title: '',
      link: '',
    },
    validationSchema: createLinkSchema,
    onSubmit,
  })

  console.log(errors)
  return (
    <>
      <Button
        w='100%'
        bg='teal'
        leftIcon={<AddIcon />}
        color='whiteAlpha'
        fontSize='2xl'
        p={6}
        onClick={onOpen}
      >
        Add Link
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mt={2} isRequired>
                <FormLabel>select platform</FormLabel>
                <Select
                  value={values.platform}
                  onChange={handleChange}
                  id='platform'
                  onBlur={handleBlur}
                >
                  <option value=''>Select a platform</option>
                  <option value='Instagram'>Instagram</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Twitch'>Twitch</option>
                  <option value='Github'>Github</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='Tiktok'>Tiktok</option>
                  <option value='Youtube'>Youtube</option>
                  <option value='Discord'>Discord</option>
                  <option value='Reddit'>Reddit</option>
                  <option value='Steam'>Steam</option>
                  <option value='Amazon'>Amazon</option>
                  <option value='Personal Site'>Personal Site</option>
                  <option value='Ecommerce'>Ecommerce</option>
                  <option value='Other'>Other</option>
                </Select>
                {errors.platform && touched.platform && (
                  <p style={{ color: 'red' }}>{errors.platform}</p>
                )}
              </FormControl>
              <FormControl mt={2} isRequired>
                <FormLabel>link title</FormLabel>
                <Input
                  placeholder='my instagram'
                  value={values.title}
                  onChange={handleChange}
                  id='title'
                  onBlur={handleBlur}
                />
                {errors.title && touched.title && (
                  <p style={{ color: 'red' }}>{errors.title}</p>
                )}
              </FormControl>
              <FormControl mt={2} isRequired>
                <FormLabel>link</FormLabel>
                <Input
                  placeholder='https://www.instagram.com/user/'
                  value={values.link}
                  onChange={handleChange}
                  id='link'
                  onBlur={handleBlur}
                />
                {errors.link && touched.link && (
                  <p style={{ color: 'red' }}>{errors.link}</p>
                )}
              </FormControl>
              <Box mt={4} mb={4} align='end'>
                <Button bg='teal' type='submit' disabled={isSubmitting}>
                  Add link
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddLinkBtn
