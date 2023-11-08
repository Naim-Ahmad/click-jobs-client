import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

export default function useJobs() {
  const axios = useAxios()
    const getJobs = async () => {
        const res = await axios.get("/jobs");
        return res.data;
      };
    
      const { data: jobs, isLoading, isError, error, isFetched } = useQuery({
        queryKey: ["jobs"],
        queryFn: getJobs,
      });

    return {jobs, isLoading, isError, error, isFetched}
}