import {
  Button,
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { TbCalendarTime } from 'react-icons/tb';
import { Link } from "react-router-dom";
import appliedImage from '../../../assets/noun-job-application-2045858.svg';

export default function HorizontalCard({ job }) {
  const {
    _id,
    jobTitle,
    loggedInUserName,
    salaryRange,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
  } = job;
  return (
    <Card className="mt-6 transition hover:scale-105 hover:shadow-xl">
      <CardBody>
        <div className="text-center">
          <Typography variant="h5" className="text-violet-500">
            {jobTitle}
          </Typography>
          <Typography variant="small" className="font-normal">
            Posted By: <span className="font-bold">{loggedInUserName}</span> |{" "}
            <span>{jobPostingDate}</span>
          </Typography>
        </div>
        <div className="my-3 flex justify-evenly">
          <Typography as="p" variant="paragraph" className="font-normal">
            {salaryRange}
          </Typography>

          <Typography as="p" variant="paragraph" className="font-normal flex items-center gap-1">
            <img className="w-3" src={appliedImage} alt="" />
            {jobApplicantsNumber}
          </Typography>
          
          <Typography as="p" variant="paragraph" className="font-normal flex items-center gap-1">
            <TbCalendarTime/>
            {applicationDeadline}
          </Typography>
        </div>
      <Link to={`/job-details/${_id}`} className="pt-0 flex justify-center">
        <Button className="text-center bg-violet-500" size="sm">view details</Button>
      </Link>
      </CardBody>
    </Card>
  );
}

HorizontalCard.propTypes = {
  job: PropTypes.object,
};
