import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Container from "../../components/Container";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import WebTitle from "../../components/WebTitle";
import useAuth from "../../hooks/useAuth";
import usePostJob from "../../hooks/usePostJob";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function AddJobs() {
  const [selectValue, setSelectValue] = useState("");
  const { user } = useAuth();

  const {mutate, isPending, isSuccess, isError, error} = usePostJob()

  const [startDate, setStartDate] = useState(new Date())

  const handleSelect = (e) => {
    setSelectValue(e);
  };

  function handlePostJob(e) {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const jobCategory = selectValue;
    const salaryRange = form.salaryRange.value;
    const applicationDeadline = form.applicationDeadline.value;
    const jobDescription = form.jobDescription.value;
    const jobBannerURL = form.jobBannerURL.value;

    const formData = {
      jobBannerURL,
      jobTitle,
      loggedInUserName: user?.displayName,
      loggedInUserEmail: user?.email,
      jobCategory,
      salaryRange,
      jobDescription,
      jobPostingDate: new Date().toLocaleDateString(),
      applicationDeadline,
      jobApplicantsNumber: 0,
    };

   mutate(formData)
  // console.log(formData)
    
  }

  if(isSuccess){
   Swal.fire({
      icon: "success",
      title: "Posted Job",
      text: "Posted Your job Successfully!"
    })
  }

  if(isError){
   toast.error(error.message)
  }

  return (
    <>
      <WebTitle>Post Jobs</WebTitle>
      <div className="pb-10">
        <Container>
          <SectionHeader>
            <SectionTitle>
              Advertise Your Job{" "}
              <span className="text-violet-500">Opportunity</span>
            </SectionTitle>
            <SectionDescription>
              Ready to find the perfect candidate for your job opening? Post
              your job on our platform and reach a pool of talented job seekers.
              It&apos;s quick and easy!
            </SectionDescription>
          </SectionHeader>
          <Card
            color="transparent"
            className="max-w-5xl mx-auto"
            shadow={false}
          >
            {/* <Typography variant="h4" color="blue-gray" className="text-center">
              Post A Job
            </Typography> */}

            <form onSubmit={handlePostJob} className="mt-8 mb-2">
              <div className="mb-1 grid grid-cols-2 gap-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Job Title
                  </Typography>
                  <Input
                    placeholder="Ex. Senior Web Developer"
                    required
                    name="jobTitle"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Job Description
                  </Typography>
                  <Input
                    placeholder="Job Description"
                    required
                    name="jobDescription"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Job Category
                  </Typography>
                  <Select
                    name="jobCategory"
                    variant="outlined"
                    label="Select a category"
                    onChange={handleSelect}
                    required
                  >
                    <Option value="On Site">On Site</Option>
                    <Option value="Remote">Remote</Option>
                    <Option value="Part Time">Part Time</Option>
                    <Option value="Hybrid">Hybrid</Option>
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Salary Range
                  </Typography>
                  <Input
                    placeholder="Ex. $200 - $300"
                    required
                    name="salaryRange"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <div className="w-full flex flex-col">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Application Deadline
                  </Typography>
                
                  <ReactDatePicker name="applicationDeadline" dateFormat="dd, MMMM" placeholderText="dd/mm" calendarClassName="w-full" minDate={new Date()} className="peer w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900" onChange={(date) => setStartDate(date)} selected={startDate} showDisabledMonthNavigation/>
                </div>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Job Banner URL
                  </Typography>
                  <Input
                    type="url"
                    name="jobBannerURL"
                    placeholder="Ex. https://i.ibb.co/example.jpg"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>

              <Button type="submit" className="mt-6 bg-violet-500 flex justify-center" fullWidth>
                {isPending? <Spinner/>: "Post Job"}
              </Button>
            </form>
          </Card>
        </Container>
      </div>
    </>
  );
}
