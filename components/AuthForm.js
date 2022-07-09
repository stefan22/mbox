import { Box, Flex, Text, Input, Button } from "@chakra-ui/react"
import NextImage from "next/image"
import vinyl from "../public/images/vinyl.jpeg"

/*
 * @fn AuthForm: user authentication form
 * @param {object}  props passed from the parent component
 * @returns {JSX} - JSX  component
 */

const AuthForm = ({
    email,
    password,
    isLoading,
    firstName,
    lastName,
    error,
    mode,
    handleName,
    handleSubmit,
}) => {
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
