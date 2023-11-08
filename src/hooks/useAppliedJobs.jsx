import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"

export default function useAppliedJobs(email) {

    const axios = useAxios()

    const getAppliedJobs = async ()=>{
       const res = await axios.get(`/applied-jobs?applierEmail=${email}`)
       return res.data;
    }

    const {data, isLoading, isError, error, isFetched} = useQuery({
        queryKey: ["appliedJobs"],
        queryFn: getAppliedJobs
    })

    return {data, isLoading, isError, error, isFetched} 
}