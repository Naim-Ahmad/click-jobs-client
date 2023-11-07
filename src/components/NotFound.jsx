import { Button, Typography } from "@material-tailwind/react";
import { Link, useRouteError } from "react-router-dom";
import Container from "./Container";

export default function NotFound() {
  const error = useRouteError();
  console.log(error);
  return (
    <Container>
      <div className="bg-notFound bg-no-repeat bg-center min-h-[100svh] min-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center">
        <div className="space-y-5">
          <Typography variant="h1" className="text-7xl font-bold">
            {error.statusText}
          </Typography>
          <Typography variant="p" className="text-2xl font-bold">
            {error.error.message}
          </Typography>
          <Link to="/"><Button className="bg-violet-500 mt-6">Go Back Home</Button></Link>
        </div>
      </div>
    </Container>
  );
}
