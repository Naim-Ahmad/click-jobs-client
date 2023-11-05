import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function SignUp() {

    const handleSignUp = e => {
        console.log(e.target)
    }
  return (
    <div className="flex items-center justify-center mt-2 min-h-[90svh]">
      <Card className="p-4" color="transparent">
      <CardHeader
          variant="gradient"
          color="gray"
          className="grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleSignUp} className=" mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">    
            <CardBody className="flex flex-col gap-4">
                
              <Input variant="standard" name="text" type="text" label="Name" size="lg" required/>
              <Input variant="standard" name="email" type="email" label="Email" size="lg" required/>
              <Input variant="standard" name="password" type="password" label="Password" size="lg" required/>
              <Input variant="standard" name="url" type="url" label="Photo URL" size="lg"/>

            </CardBody>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
           
          />
          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/sign-in" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
