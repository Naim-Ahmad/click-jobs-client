import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import MySpinner from "../../components/MySpinner";
import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import WebTitle from "../../components/WebTitle";
import useJob from "../../hooks/useJob";
import Modal from "./Modal";

export default function JobDetails() {
  const { id } = useParams();

  const { job, isLoading, isError, error } = useJob(id);

  //   console.log(isSuccess, isPending)

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  console.log(job);

  // useEffect(() => {
  //   if (isLoading) {
  //     <MySpinner />;
  //   }

  //   if (isError) {
  //     toast.error(error.message);
  //   }
  // }, [isLoading, isError, error]);

  if (isLoading) {
    return <MySpinner />;
  }

  if (isError) {
    return toast.error(error.message);
  }

  const {
    jobBannerURL,
    jobTitle,
    loggedInUserName,
    loggedInUserEmail,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
  } = job;

  console.log(jobApplicantsNumber);

  return (
    <div>
      <WebTitle>Job Details</WebTitle>
      <Container>
        <SectionHeader>
          <SectionTitle>Job <span className="text-violet-500">Details</span> </SectionTitle>
          {/* <SectionDescription>
            We are proud to introduce you to a handpicked collection of leading
            companies. Discover what makes these employers exceptional and why
            you should consider them for your career journey.
          </SectionDescription> */}
        </SectionHeader>
        <div className="flex gap-8 min-h-screen my-10">
          <div className=" flex-1 space-y-4">
            <figure>
              <img
                className="h-96 w-full rounded-lg object-cover object-center"
                src={jobBannerURL}
                alt={jobTitle}
              />
            </figure>
            <Typography variant="h3">{jobTitle}</Typography>
            <Typography variant="paragraph">
              {jobDescription ? jobDescription : ""}
            </Typography>
          </div>
          <div className=" flex-1 flex flex-col gap-4">
            <Typography variant="paragraph" className="font-medium">
              Posted by : {loggedInUserName ? loggedInUserName : ""}
            </Typography>
            <Typography variant="paragraph" className="font-medium">
              Job Category : {jobCategory ? jobCategory : ""}
            </Typography>
            <Typography variant="paragraph" className="font-medium">
            salaryRange : {salaryRange ? salaryRange : ""}
            </Typography>
            <Typography variant="paragraph" className="font-medium">
              Job Posting Date : {jobPostingDate ? jobPostingDate : ""}
            </Typography>
            <Typography variant="paragraph" className="font-medium">
              Application Deadline :{" "}
              {applicationDeadline ? applicationDeadline : ""}
            </Typography>
            <Typography variant="paragraph" className="font-medium">
              Applicant : {jobApplicantsNumber ? jobApplicantsNumber : "0"} {" "}
              Person.
            </Typography>
            <Button className="bg-violet-500" onClick={handleOpen}>
              Apply Now
            </Button>
          </div>
        </div>
        <Modal open={open} handleOpen={handleOpen} job={job} />
      </Container>
    </div>
  );
}
