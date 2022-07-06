import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NextImage from 'next/image'
import { authFn } from '../lib/auth/authFn'
import vinyl from '../public/images/vinyl.jpeg'

const AuthForm = ({ mode }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const router = useRouter()
   const [firstName, setFirstName] = useState(undefined)
   const [lastName, setLastName] = useState(undefined)

   const handleName = e => {
      const { name, value } = e.target
      switch (name) {
         case 'firstName':
            setFirstName(value)
            break
         case 'lastName':
            setLastName(value)
            break
         case 'email':
            setEmail(value)
            break
         case 'password':
            setPassword(value)
            break
         default:
            break
      }
   }

   const handleSubmit = async e => {
      e.preventDefault()
      setIsLoading(true)

      if (mode === 'signin') {
         await authFn(mode, { email, password })
         setIsLoading(false)
         router.push('/')
      }

      if (mode === 'signup') {
         await authFn(mode, { email, password, firstName, lastName })
         setIsLoading(false)
         router.push('/')
      }
   }

   return (
      <Box className="inner-wrapper" height="100vh" width="100vw" color="gray.900">
         <Flex
            color="gray.900"
            justify="left"
            align="center"
            height="100px"
            borderBottom="black 1px solid"
            padding="0 1rem"
         >
            <NextImage src={vinyl} height={60} width={60} />
            <Text className="page-heading" fontSize="2xl">
               Header
            </Text>
         </Flex>

         <Flex className="form-wrapper" justify="center" align="center" height="calc(75vh)">
            <Text fontSize="2xl">{mode === 'signup' ? 'New Users' : 'Welcome back'}</Text>

            <Box padding="50px" border="1px solid gray " borderRadius="4px">
               <form id="user-form" onSubmit={handleSubmit}>
                  {mode === 'signup' && (
                     <>
                        <Input
                           name="firstName"
                           placeholder="firstname"
                           type="text"
                           onChange={e => handleName(e)}
                        />
                        <Input
                           name="lastName"
                           placeholder="lastname"
                           type="text"
                           onChange={e => handleName(e)}
                        />
                     </>
                  )}

                  <Input name="email" placeholder="email" type="email" onChange={e => handleName(e)} />
                  <Input
                     name="password"
                     placeholder="password"
                     type="password"
                     onChange={e => handleName(e)}
                  />
                  <Button
                     type="submit"
                     bg="gray.900"
                     color="white"
                     isLoading={isLoading}
                     sx={{
                        '&:hover': {
                           bg: 'green.300',
                        },
                     }}
                  >
                     {mode}
                  </Button>
               </form>
            </Box>
         </Flex>
      </Box>
   )
}

export default AuthForm
