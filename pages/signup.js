import AuthForm from "../components/AuthForm"
import { useState } from "react"
import { authFn } from "../lib/auth/authFn"
import { useRouter } from "next/router"

const Signup = () => {
    const router = useRouter()
    const mode = "signup"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
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
        return
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(firstName, lastName, email, password, isLoading, error, " and  mode", mode)
        setIsLoading(true)
        setError(false)
        if (mode === "signup") {
            await authFn(mode, { email, password, firstName, lastName })
            setIsLoading(false)
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
            router.push("/")
        }
    }

    return (
        <div className="signup-wrapper">
            <AuthForm
                router={router}
                email={email}
                password={password}
                isLoading={isLoading}
                firstName={firstName}
                lastName={lastName}
                error={error}
                mode={mode}
                handleName={handleName}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Signup
