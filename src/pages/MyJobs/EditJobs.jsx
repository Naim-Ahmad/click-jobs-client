/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Option,
    Select,
    Spinner,
    Typography,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MySpinner from "../../components/MySpinner";
import SectionDescription from "../../components/SectionDescription";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useJob from "../../hooks/useJob";
import usePutJob from "../../hooks/usePutJob";

export default function EditJobs({ open, handleOpen }) {
    console.log(open.id, handleOpen)
  const {
    mutate,
    isPending,
    isSuccess,
    data,
    isError: putIsError,
    error: putError,
  } = usePutJob(open?.id);

  const {user} = useAuth()

  const { isLoading, job } = useJob(open?.id);

  const [select, setSelect] = useState("");

  const handleSelect = (e) => setSelect(e);

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const jobCategory = select;
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
      applicationDeadline
    };

    // console.log(formData)
    mutate(formData)
  };

  useEffect(() => {
    if (data?.modifiedCount) {
        handleOpen(open?.id)
        toast.success("Successfully Updated Your Job Info!");
    }
  }, [data]);


  if(putIsError) {
    handleOpen(open?.id)
    toast.error(putError?.message)
  }


//   if (isLoading) return <MySpinner />;

  return (
    <Dialog open={open?.state} handler={()=>handleOpen(open?.id)}>
      <DialogHeader className="flex-col gap-3">
        <SectionTitle>Update Job Info</SectionTitle>
        <SectionDescription>
          Please fill up this form to update your job info.
        </SectionDescription>
      </DialogHeader>

      <DialogBody>
        {isLoading 
        ? <MySpinner/>
        :  <form onSubmit={handleUpdateJob} className="mt-8 mb-2">
          <div className="mb-1 grid grid-cols-2 gap-6">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Job Title
              </Typography>
              <Input
                placeholder="Ex. Senior Web Developer"
                name="jobTitle"
                defaultValue={job?.jobTitle}
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
                defaultValue={job?.jobDescription}
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
                variant="outlined"
                label="Select a category"
                value={job?.jobCategory}
                onChange={handleSelect}
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
                name="salaryRange"
                defaultValue={job?.salaryRange}
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
                defaultValue={job?.applicationDeadline}
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
                defaultValue={job?.jobBannerURL}
                placeholder="Ex. https://i.ibb.co/example.jpg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>

          {/* <Button type="submit" className="mt-6 bg-violet-500 flex justify-center" fullWidth>
                {isPending? <Spinner/>: "Post Job"}
              </Button> */}
          {/* </form> */}
          <DialogFooter className="px-0">
            <Button
              variant="text"
              color="red"
              onClick={()=> handleOpen(open?.id)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" className="bg-violet-500">
              {isPending ? <Spinner /> : <span>Save</span>}
            </Button>
          </DialogFooter>
        </form>}
      </DialogBody>
    </Dialog>
  );
}
