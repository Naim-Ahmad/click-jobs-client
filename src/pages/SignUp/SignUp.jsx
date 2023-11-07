import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import WebTitle from "../../components/WebTitle";
import useAuth from "../../hooks/useAuth";

const strongPassword = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/

export default function SignUp() {
  const { signUp, updateUserInfo } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // validation
    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters long!')
    }

    if (!strongPassword.test(password)) {
      return toast.error(`Password must contain at least one special character (@, #, $, %, ^, &, +, =, or !) and at least one capital letter.`)
     
    }
    
    setLoading(true);
    
    signUp(email, password)
      .then(() => {
        updateUserInfo(name, photoURL)
          .then(() => {
            setLoading(false);
            toast.success("Registration Successful!");
            state ? navigate(state, {
              replace: true
            }) : navigate("/", {
              replace: true
            })
          })
          .catch((err) => {
            toast.error(err.code);
            setLoading(false);
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error(err.code);
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <WebTitle>Sign Up </WebTitle>
      <div className="flex items-center justify-center mt-2 min-h-[90svh]">
        <Card className="p-4" color="transparent">
          <Typography variant="h3" className="text-center border-t pt-5">
            Sign Up
          </Typography>
          <form
            onSubmit={handleSignUp}
            className=" mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <CardBody className="flex flex-col gap-4">
                <Input
                  variant="standard"
                  name="name"
                  label="Name"
                  size="lg"
                  required
                />
                <Input
                  variant="standard"
                  name="email"
                  label="Email"
                  size="lg"
                  required
                />
                <Input
                  variant="standard"
                  name="password"
                  type="password"
                  label="Password"
                  size="lg"
                  required
                />

                <Input
                  variant="standard"
                  name="photoURL"
                  type="url"
                  label="Photo URL"
                  size="lg"
                />
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
            <Button
              disabled={loading}
              type="submit"
              className="mt-6 flex bg-violet-500 justify-center"
              fullWidth
            >
              {loading ? <Spinner /> : "Sign Up"}
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/sign-in" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
          <SocialLogin/>
        </Card>
      </div>
    </>
  );
}
