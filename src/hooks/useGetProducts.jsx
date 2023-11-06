import { useQuery } from "@tanstack/react-query"
import axios from "../config/axios.config"

export default function useGetProducts({queryKey, key, value}) {

    const getJobs = ()=>{
        if(key || value) {
            return axios.get('/jobs')
        }
        axios.get(`/jobs?${key}=${value}`)
    }

    const {data, isLoading} = useQuery({
        queryKey: [queryKey, {key, value}],
        queryFn: ()=> getJobs,
        // staleTime: 1000 * 30
    })

    return {data, isLoading}
}