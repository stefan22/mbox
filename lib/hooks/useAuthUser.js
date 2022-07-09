import useSWR from "swr"
import dataFetcher from "../auth/dataFetcher"

const useAuthUser = () => {
    const { data, error } = useSWR("/user", dataFetcher)

    return {
        user: data,
        loadingUser: !data && !error,
        isError: error,
    }
}

export default useAuthUser
