/* eslint-disable react/prop-types */
import emailjs from '@emailjs/browser';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SectionDescription from "../../components/SectionDescription";
import SectionTitle from "../../components/SectionTitle";
import useApplyJob from "../../hooks/useApplyJob";
import useAuth from "../../hooks/useAuth";

const templateParams = {
  applier_name: "",
  applier_email: "",
  hr_name: "",
  job_title: "",
  hr_email: "",
  job_category: ""
}

export default function Modal({ open, handleOpen, job }) {

  const { user } = useAuth();

  const { mutate, data } = useApplyJob(job?._id);

  const [isPending, setIsPending] = useState(false)



  const handleConfirm = (e) => {
    e.preventDefault();
    const applierName = e.target.name.value;
    const applierEmail = e.target.email.value;
    const resumeURL = e.target.resumeURL.value;
    const formData = {
      resumeURL,
      applierName,
      applierEmail,
      ...job,
    };
    delete formData._id;

    const loggedUser = applierEmail.toLowerCase();
    const postedBy = job?.loggedInUserEmail?.toLowerCase()

    if (postedBy === loggedUser) {
      handleOpen();
      return toast.error("You are employer. You can't apply this job!");
    }

    if (Date.parse(job.applicationDeadline) <= Date.now()) {
      handleOpen();
      return toast.error("Deadline is over. You can't apply this job!");
    }
    
    console.log(formData)
    setIsPending(true)

    templateParams.applier_email = formData.applierEmail
    templateParams.applier_name = formData.applierName
    templateParams.hr_name = formData.loggedInUserName
    templateParams.hr_email = formData.loggedInUserEmail
    templateParams.job_title = formData.jobTitle
    templateParams.job_category = formData.jobCategory

    console.log(templateParams)
    mutate(formData);
  };

  useEffect(() => {
    if (data?.insertedId) {
      emailjs.send('service_ov9xwqc', "template_6d4qoeg", templateParams)
      .then((response)=> {
        setIsPending(false)
        handleOpen();
        toast.success("Successfully Applied Check Your Email!");
        console.log('SUCCESS!', response.status, response.text);
     },(error) => {
        console.log('FAILED...', error);
     });
    }
  }, [data]);

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader className="flex-col gap-3">
        <SectionTitle>Job Apply Info</SectionTitle>
        <SectionDescription>
          Please fill up this form to apply this job
        </SectionDescription>
      </DialogHeader>

      <DialogBody>
        <form onSubmit={handleConfirm}>
          <div className="mb-3">
            <Typography className="mb-2" variant="h6">
              Your Name
            </Typography>
            <Input
              label="Name"
              size="lg"
              defaultValue={user?.displayName}
              type="text"
              name="name"
            />
          </div>
          <div className="mb-3">
            <Typography className="mb-2" variant="h6">
              Your Email
            </Typography>
            <Input
              label="Email"
              size="lg"
              defaultValue={user?.email}
              type="email"
              name="email"
              required
            />
          </div>

          <div className="mb-3">
            <Typography className="mb-2" variant="h6">
              Your Resume URL
            </Typography>
            <Input
              label="Resume"
              size="lg"
              type="url"
              required
              name="resumeURL"
            />
          </div>

          
          <DialogFooter className="px-0">
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" className="bg-violet-500">
              {isPending ? <Spinner /> : <span>Submit</span>}
            </Button>
          </DialogFooter>
        </form>
      </DialogBody>
    </Dialog>
  );
}

Modal.propTypes = {};
