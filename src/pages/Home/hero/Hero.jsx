import { Button, Input, Typography } from "@material-tailwind/react";
import manImage from "../../../assets/Men-In-Suit-fotor-bg-remover-2023110612258.png";
import Container from "../../../components/Container";

export default function Hero() {
  return (
    <div className="bg-hero min-h-[68svh]">
      <Container>
        <div className="flex">
          <div className="flex-1 flex gap-4 flex-col justify-center">
            <Typography className="" variant="h1" color="blue-gray" as="h1">
              Discover Your <span className="text-violet-500">Dream</span> Job
              with
              <span className="text-violet-500">Click Jobs</span>
            </Typography>
            <Typography as="p" variant="paragraph" className="font-normal">
              we&apos;re here to help you achieve your career goals. Explore a wealth
              of job listings, expert advice, and resources designed just for
              you.
            </Typography>
            <div className="relative flex w-full max-w-[24rem]">
              <Input
                type="search"
                label="Job title or keyword"
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button size="sm" className="!absolute right-1 top-1 rounded">
                Search
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img className="translate-y-6" src={manImage} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
