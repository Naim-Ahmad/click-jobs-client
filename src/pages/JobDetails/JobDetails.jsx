import { useParams } from "react-router-dom"
import useJob from "../../hooks/useJob"

export default function JobDetails() {
    const {id} = useParams()
    const {job, isLoading, isError, error} = useJob(id)

    console.log(job)
    

    return (
        <div>JobDetails</div>
    )
}