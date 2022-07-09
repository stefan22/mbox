import AuthForm from "../components/AuthForm"
import { useState } from "react"
import { authFn } from "../lib/auth/authFn"
import { useRouter } from "next/router"

const Signin = () => {
    const router = useRouter()
    const mode = "signin"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleName = e => {
        const { name, value } = e.target
        switch (name) {
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
        setIsLoading(true)
        setError(false)
        if (mode === "signin") {
            await authFn(mode, { email, password })
            setIsLoading(false)
            setEmail("")
            setPassword("")
            router.push("/")
        }
    }

    return (
        <div className="signin-wrapper">
            <AuthForm
                router={router}
                email={email}
                password={password}
                isLoading={isLoading}
                error={error}
                mode={mode}
                handleName={handleName}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Signin
