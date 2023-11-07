import { useMutation } from "@tanstack/react-query";
import useAxios from "./useAxios";

export default function useApplyJob(formData) {

    const axios = useAxios()

    const applyJob = async (formData) => {
        const res = await axios.post("/apply-jobs", formData);
        return res.data;
      };
    
      const {mutate, isSuccess, isPending, error, isError, data} = useMutation({
        mutationKey: ["apply-job", formData],
        mutationFn: applyJob,
      });

    return {mutate, isSuccess, isPending, error, isError, data}
}