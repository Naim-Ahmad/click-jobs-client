import { useMutation } from "@tanstack/react-query";
import useAxios from "./useAxios";

export default function usePostJob() {
    const axios = useAxios()
    
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["postJob"],
    mutationFn: async (formData) => {
      const res = await axios.post("/add-jobs", formData);
      return res.data;
    },
  });

  return  { mutate, isPending, isSuccess, isError, error };
}
