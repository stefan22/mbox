import { Box, Flex, Text, Input, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import NextImage from "next/image"
import { authFn } from "../lib/auth/authFn"
import vinyl from "../public/images/vinyl.jpeg"

const AuthForm = ({ mode }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const [firstName, setFirstName] = useState(undefined)
    const [lastName, setLastName] = useState(undefined)
    const [error, setError] = useState(false)
    const handleName = e => {
        const { name, value } = e.target
        switch (name) {
            case "firstName":
                setFirstName(value)
                break
            case "lastName":
                setLastName(value)
                break
            case "email":
                setEmail(value)
                break
            case "password":
                setPassword(value)
                break
            default:
                break
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setIsLoading(true)
        setError(false)
        if (mode === "signin") {
            const statusCode = await authFn(mode, { email, password })
            if (statusCode !== 200) {
                setError(true)
                router.push("/signin")
            }
            setIsLoading(false)
            setEmail("")
            setPassword("")
            router.push("/")
        }
        if (mode === "signup") {
            const status = await authFn(mode, { email, password, firstName, lastName })
            if (status !== 200) {
                setError(true)
                setIsLoading(false)
                return router.push("/signup")
            }
            setIsLoading(false)
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
            router.push("/")
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
                <Text fontSize="2xl">{mode === "signup" ? "New Users" : "Welcome back"}</Text>

                <Box padding="50px" border="1px solid gray " borderRadius="4px">
                    <form id="user-form" onSubmit={handleSubmit}>
                        {mode === "signup" && (
                            <>
                                <Input
                                    name="firstName"
                                    value={firstName}
                                    placeholder="firstname"
                                    type="text"
                                    required
                                    onChange={e => handleName(e)}
                                />
                                <Input
                                    name="lastName"
                                    value={lastName}
                                    placeholder="lastname"
                                    type="text"
                                    required
                                    onChange={e => handleName(e)}
                                />
                            </>
                        )}

                        <Input
                            name="email"
                            value={email}
                            placeholder="email"
                            type="email"
                            required
                            onChange={e => handleName(e)}
                        />
                        <Input
                            value={password}
                            name="password"
                            placeholder="password"
                            type="password"
                            required
                            onChange={e => handleName(e)}
                        />
                        <Button
                            type="submit"
                            bg="gray.900"
                            color="white"
                            isLoading={isLoading}
                            sx={{
                                "&:hover": {
                                    bg: "red.600",
                                },
                            }}
                        >
                            {mode}
                        </Button>
                    </form>
                </Box>
                {error && (
                    <Text className="input-error" textAlign="center" color="red.500">
                        Invalid email or password
                    </Text>
                )}
            </Flex>
        </Box>
    )
}

export default AuthForm
