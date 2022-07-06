import { Box, Flex, Input, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
//  import { useSWRConfig } from 'swr'
import NextImage from 'next/image'
import { authFn } from '../lib/auth/authFn'

const AuthForm = ({ mode }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isLoading, setILoading] = useState(false)
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
      setILoading(true)

      if (mode === 'signin') {
         await authFn(mode, { email, password })
         setILoading(false)
         router.push('/')
      }

      if (mode === 'signup') {
         await authFn(mode, { email, password, firstName, lastName })
         setILoading(false)
         router.push('/')
      }
   }

   return (
      <Box height="100vh" width="100vw" bg="black" color="white">
         <Flex justify="center" align="center" height="100px" borderBottom="white 1px solid">
            <NextImage src="/logo.svg" height={60} width={120} />
         </Flex>
         <Flex justify="center" align="center" height="calc(100vh - 100px)">
            <Box padding="50px" bg="gray.900" borderRadius="6px">
               <form onSubmit={handleSubmit}>
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
                     bg="green.500"
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
