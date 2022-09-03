import { useEffect } from "react"

const useLocalStorage = (data, strkey) => {
    useEffect(() => {
        localStorage.setItem(strkey, JSON.stringify(data))
    }, [data, strkey])
}

export default useLocalStorage
