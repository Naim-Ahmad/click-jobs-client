import { Button, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function SocialLogin() {
    const {continueWithGoogle} = useAuth()
    const navigate = useNavigate()
    const {state} = useLocation()

    const handleSocialLogin= (LoginFunc)=>{
        LoginFunc()
        .then(()=>{
            toast.success("Login Successful!")
            state ? navigate(state, {
                replace: true
            }): navigate('/', {
                replace: true
            })
        })
        .catch(err=> {
            toast.error(err.code)
        })
    }
  return (
    <div className="my-4">
      <Typography className="text-center font-bold">OR</Typography>
      <div className="my-2">
        <Button
          variant="outlined"
          className="border w-full rounded-full border-violet-500 flex items-center gap-2 justify-center"
            onClick={()=>handleSocialLogin(continueWithGoogle)}
        >
            <FcGoogle className="text-2xl"/>
          Continue With Google
        </Button>
      </div>
    </div>
  );
}
