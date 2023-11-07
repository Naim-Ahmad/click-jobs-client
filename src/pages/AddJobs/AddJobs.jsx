import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Container from "../../components/Container";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import WebTitle from "../../components/WebTitle";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

export default function AddJobs() {
  const [selectValue, setSelectValue] = useState("");
  const { user } = useAuth();
  const axios = useAxios()



  const {mutate, isPending, isSuccess, isError, error} = useMutation({
    mutationKey: ["postJob"],
    mutationFn: async (formData)=>{
      const res = await axios.post('/add-jobs', formData)
      return res.data
    }
  })

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
      <WebTitle>Post Jobs | Click Jobs</WebTitle>
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
                    name="jobDescription"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    required
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
                  >
                    <Option value="on site">On Site</Option>
                    <Option value="remote">Remote</Option>
                    <Option value="part time">Part Time</Option>
                    <Option value="hybrid">Hybrid</Option>
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Salary Range
                  </Typography>
                  <Input
                    placeholder="Ex. $200 - $300"
                    name="salaryRange"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Application Deadline
                  </Typography>
                  <Input
                    type="date"
                    name="applicationDeadline"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Job Banner URL
                  </Typography>
                  <Input
                    type="url"
                    name="jobBannerURL"
                    placeholder="Ex. https://i.ibb.co/example.jpg"
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
