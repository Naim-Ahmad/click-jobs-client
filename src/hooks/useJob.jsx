import { useQuery } from "@tanstack/react-query"
import useAxios from './useAxios'

export default function useJob(id) {
    const axios = useAxios()
    const getJob = async ()=> {
        const res = await axios.get(`/jobs/${id}`)
        return res.data
    }

    const {data:job, isLoading, isError, error} = useQuery({
        queryKey: ["job", id],
        queryFn: getJob
    })

    return {job, isLoading, isError, error}
}