import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Typography
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-[80svh]">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input variant="standard" label="Email" size="lg" />
          <Input variant="standard" label="Password" size="lg" />
          
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="span"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
                
              <Link to="/sign-up">Sign up</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>

    </div>
  );
}
