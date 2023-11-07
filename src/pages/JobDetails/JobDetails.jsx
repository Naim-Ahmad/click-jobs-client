import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import MySpinner from "../../components/MySpinner";
import WebTitle from "../../components/WebTitle";
import useJob from "../../hooks/useJob";
import Modal from "./Modal";

export default function JobDetails() {
  const { id } = useParams();

  const { job, isLoading, isError, error } = useJob(id);

//   console.log(isSuccess, isPending)

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);


  useEffect(()=>{
    if (isLoading) {
        <MySpinner />;
      }

      if(isError){
        toast.error(error.message)
      }
  }, [isLoading, isError, error])

  return (
    <div>
      <WebTitle>Job Details</WebTitle>
      <Container>
        <div className="flex max-h-screen">
          <div className="border w-1/2"></div>
          <div className="border h-52">
            <Button onClick={handleOpen}>Apply</Button>
          </div>
        </div>
        <Modal
          open={open}
          handleOpen={handleOpen}
          job={job}
        />
      </Container>
    </div>
  );
}
