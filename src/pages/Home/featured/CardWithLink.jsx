/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function CardWithLink({ data }) {
  console.log(Object.keys(data).join(","));
  const { _id, name, description, logo, link } = data;
  console.log(link)
  return (
    <Card shadow={true} className="mt-6 w-60 sm:w-96">
      <CardBody>
        <figure>
          <img className="w-32 h-32" src={logo} alt="" />
        </figure>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href={link} target="__blank" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Visit Company
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
