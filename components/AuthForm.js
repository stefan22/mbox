import {
    Flex,
    Box,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import { LinkOverlay } from "@chakra-ui/layout"
import { MdAssignmentInd } from "react-icons/md"

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
    handleSubmit
}) => {
    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack width="50%" spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading data-test={mode} fontSize={"4xl"}>
                        {mode === "signup" ? "Sign-up now" : "Sign-in to your account"}
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        {mode === "signup"
                            ? "to enjoy all our new features"
                            : "or click on the link below to signup now"}
                    </Text>
                </Stack>
                <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
                    <Stack spacing={4}>
                        <form data-test="user-form" id="user-form" onSubmit={handleSubmit}>
                            {mode === "signup" && (
                                <>
                                    <FormLabel pt="5">Firstname</FormLabel>
                                    <Input
                                        data-test="user-firstname"
                                        name="firstName"
                                        value={firstName}
                                        placeholder="firstname"
                                        type="text"
                                        onChange={e => handleName(e)}
                                    />
                                    <FormLabel pt="7">Lastname</FormLabel>
                                    <Input
                                        data-test="user-lastname"
                                        name="lastName"
                                        value={lastName}
                                        placeholder="lastname"
                                        type="text"
                                        required
                                        onChange={e => handleName(e)}
                                    />
                                </>
                            )}

                            <FormLabel pt="7">Email address</FormLabel>
                            <Input
                                data-test="user-email"
                                name="email"
                                value={email}
                                placeholder="email"
                                type="email"
                                required
                                onChange={e => handleName(e)}
                            />

                            <FormLabel pt="7">Password</FormLabel>
                            <Input
                                data-test="user-password"
                                value={password}
                                name="password"
                                placeholder="password"
                                type="password"
                                required
                                onChange={e => handleName(e)}
                            />

                            <Stack spacing={10}>
                                <Stack
                                    pt="7"
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                    <Link href="/" color={"blue.400"}>
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button
                                    data-test="data-submit"
                                    type="submit"
                                    color="white"
                                    isLoading={isLoading}
                                    bg={"blue.400"}
                                    sx={{
                                        bg: "red.600"
                                    }}
                                >
                                    {mode.slice(0, 1).toUpperCase() + mode.slice(1, mode.length)}
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
                <Box marginTop="10">
                    <NextLink href={`${mode === "signin" ? "/signup" : "/signin"}`} passHref>
                        <Button padding="0" justifyContent="center" width="100%" background="transparent">
                            <LinkOverlay className="signup-button">
                                <MdAssignmentInd />
                                {mode === "signin" ? "Signup now " : "Signin here"}
                            </LinkOverlay>
                        </Button>
                    </NextLink>
                </Box>

                {error && (
                    <Text data-test="input-error" className="input-error" textAlign="center" color="red.500">
                        Invalid email or password
                    </Text>
                )}
            </Stack>
        </Flex>
    )
}

export default AuthForm
