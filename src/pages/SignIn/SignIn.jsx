import {
  Button,
  Card,
  CardBody,
  CardFooter,
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

export default function SignIn() {
  const {signIn} = useAuth()
  const [loading, setLoading] = useState(false);
  const {state} = useLocation()
  const navigate = useNavigate()
  
  const strongPassword = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/

  const handleLogin = (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

     // validation
     if (password.length < 6) {
      return toast.error('Password must be at least 6 characters long!')
    }

    if (!strongPassword.test(password)) {
      return toast.error(`Password must contain at least one special character (@, #, $, %, ^, &, +, =, or !) and at least one capital letter.`)
     
    }

    setLoading(true)

    signIn(email, password)
    .then(()=>{
      state ? navigate(state) : navigate('/')
    })
    .catch(err=>{
      console.log(err)
      setLoading(false)
      toast.error(err.code)
    })
    
  }
  return (
    <>
      <WebTitle> Sign In | Click Jobs</WebTitle>
      <div className="flex items-center justify-center min-h-[80svh]">
        <form onSubmit={handleLogin}>
          <Card className="w-96">
            <Typography variant="h3" className="text-center border-t pt-5">
              Sign In
            </Typography>

            <CardBody className="flex flex-col gap-4">
              <Input variant="standard" type="email" name="email" label="Email" size="lg" required/>
              <Input variant="standard" type="password" name="password" label="Password" size="lg" required />
            </CardBody>
            <CardFooter className="pt-0">
              <Button disabled={loading} type="submit" className="bg-violet-500 flex justify-center" fullWidth>
                {loading ? <Spinner/>: "Sign In"}
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
            <SocialLogin/>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}
