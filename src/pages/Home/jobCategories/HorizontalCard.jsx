import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import CardTitle from "./CardTitle";

export default function HorizontalCard({ job }) {
  const {
    _id,
    jobBanner,
    jobTitle,
    loggedInUserName,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
  } = job;
  return (
    <Card className="w-full flex-row">
      <CardHeader shadow={false} floated={false} className="flex-1">
        <CardTitle>{jobTitle}</CardTitle>
        <p>{loggedInUserName}</p>
        <p>{jobCategory}</p>
        <p>{salaryRange}</p>
      </CardHeader>
      <CardBody className="flex-1">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {jobDescription}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {jobPostingDate}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {jobApplicantsNumber}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            View Details
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

HorizontalCard.propTypes = {
  job: PropTypes.object,
};
