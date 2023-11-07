import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

export default function useJobsQuery(key, value) {

    const axios = useAxios()

    const getJobs = async ()=>{
        const res = await axios.get(`/jobs?${key}=${value}`)
        return res.data;
    }

    const {data:jobs, isLoading, isError, error} = useQuery({
        queryKey: ["jobsQuery"],
        queryFn: getJobs
    })

    return {jobs, isLoading, isError, error}
}