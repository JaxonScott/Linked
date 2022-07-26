import {
  Container,
  Text,
  Box,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Divider,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Router from 'next/router'
import { motion } from 'framer-motion'
import { FormikProvider, useFormik } from 'formik'
import { loginSchema } from '../schemas'

const onSubmit = async (values, actions) => {
  console.log(values)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  actions.resetForm()
  Router.push({
    pathname: '/profile',
  })
}

const Login = () => {
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
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  })

  return (
    <Container mt={8}>
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
          <Heading as='h1'>Log In</Heading>
          <Text>
            Welcome back to <span> </span>
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
          <FormLabel>email</FormLabel>
          <Input
            placeholder='email'
            value={values.email}
            id='email'
            onChange={handleChange}
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
            id='password'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p style={{ color: 'red' }}>{errors.password}</p>
          )}
        </FormControl>
        <Box mt={2}>
          <Text>
            New to linked? Sign up
            <NextLink href='/signup'>
              <Link color='#ff63c3'> here</Link>
            </NextLink>
          </Text>
        </Box>
        <Box mt='3'>
          <Button bg='teal' w='100%' type='submit' disabled={isSubmitting}>
            Login
          </Button>
        </Box>
      </form>
    </Container>
  )
}

export default Login
