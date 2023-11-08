import { useMutation } from "@tanstack/react-query"
import useAxios from "./useAxios"

export default function usePutJob(id) {
    const axios = useAxios()
    const updateJob = async (formData)=>{
        const res = await axios.put(`/update-job/${id}`, formData)
        return res.data;
    }
    const {mutate, isPending, isSuccess, isError, error, data}= useMutation({
        mutationFn: updateJob,
        mutationKey: ['update-job']
    })
    return {mutate, isPending, isSuccess, isError, error, data}
}