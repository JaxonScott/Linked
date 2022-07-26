import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Link,
  Input,
  Button,
  Text,
  Heading,
  Divider,
  border,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Router from 'next/router'
import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import { signUpSchema } from '../schemas'

const onSubmit = async (values, actions) => {
  console.log(values)
  console.log(actions)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  actions.resetForm()
  Router.push({
    pathname: '/newuser',
  })
}

const Signup = () => {
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
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  })

  console.log(errors)

  return (
    <Container mt={6}>
      <Box align='center'>
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
          <Heading as='h1'>Sign Up</Heading>
          <Text>
            link all your socails at once with{' '}
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
          </Text>
        </motion.div>
        <Divider my={6} />
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>username</FormLabel>
          <Input
            placeholder='username'
            value={values.username}
            onChange={handleChange}
            id='username'
            onBlur={handleBlur}
          />
          {errors.username && touched.username && (
            <p style={{ color: 'red' }}>{errors.username}</p>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>email</FormLabel>
          <Input
            placeholder='email'
            value={values.email}
            onChange={handleChange}
            id='email'
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p style={{ color: 'red' }}>{errors.email}</p>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <Input
            placeholder='password'
            type='password'
            value={values.password}
            onChange={handleChange}
            id='password'
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p style={{ color: 'red' }}>{errors.password}</p>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>confirm password</FormLabel>
          <Input
            type='password'
            placeholder='confirm password'
            value={values.confirmPassword}
            onChange={handleChange}
            id='confirmPassword'
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
          )}
        </FormControl>
        <Box mt={2}>
          <Text>
            Already have an account? Login
            <NextLink href='/login'>
              <Link color='#ff63c3'> here</Link>
            </NextLink>
          </Text>
        </Box>
        <Box mt='3'>
          <Button bg='teal' w='100%' type='submit' disabled={isSubmitting}>
            Sign up
          </Button>
        </Box>
      </form>
    </Container>
  )
}

export default Signup
