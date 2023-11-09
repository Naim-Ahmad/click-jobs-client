/* eslint-disable react/prop-types */
import { Card, CardBody, Chip, Typography } from "@material-tailwind/react";
export default function AppliedCard({ job }) {
  const { resumeURL, applierName, applierEmail, jobTitle, jobCategory } = job;

  return (
    <Card className="mt-6 transition hover:scale-105 hover:shadow-xl">
      <CardBody>
        <div className="text-left flex flex-col gap-2   ">
          <Typography variant="h5" className="text-violet-500">
            {jobTitle}
          </Typography>
          <Typography variant="small" className="font-normal">
            <span className="font-bold">Applicant:</span> {applierName}
          </Typography>
          <Typography variant="small" className="font-normal">
            <span className="font-bold">Email:</span> {applierEmail}
          </Typography>
          <Typography as="p" variant="small" className="font-normal">
            <span className="font-bold">Resume Link:</span> {resumeURL}
          </Typography>

          <Typography
            as="p"
            variant="small"
            className="font-normal flex items-center gap-1 text-center"
          >
            <span className="font-bold mr-2">Job Category:</span>
            {jobCategory.toLowerCase() === "on site" && (
              <Chip variant="ghost" color="blue" size="sm" value={jobCategory} />
            )}
            {jobCategory.toLowerCase() === "remote" && (
              <Chip variant="ghost" color="purple" size="sm" value={jobCategory} />
            )}
            {jobCategory.toLowerCase() === "part time" && (
              <Chip variant="ghost" color="light-green" size="sm" value={jobCategory} />
            )}
            {jobCategory.toLowerCase() === "hybrid" && (
              <Chip variant="ghost" color="cyan" size="sm" value={jobCategory} />
            )}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
