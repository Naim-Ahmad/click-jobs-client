import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Container from "../../components/Container";
import MySpinner from "../../components/MySpinner";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import useAppliedJobs from "../../hooks/useAppliedJobs";
import useAuth from "../../hooks/useAuth";
import useJobsQuery from "../../hooks/useJobsQuery";

export default function Profile() {
  const { user } = useAuth();
  let { data, isLoading } = useAppliedJobs(
    user?.email
  );

  const { jobs } = useJobsQuery("loggedInUserEmail", user?.email);

  //   console.log(jobs)

  if (isLoading) return <MySpinner />;

  return (
    <div>
      <SectionHeader>
        <SectionTitle>
          My <span className="text-violet-500">profile</span>
        </SectionTitle>
        <SectionDescription>
          You can see your profile and update
        </SectionDescription>
      </SectionHeader>
      <Container>
        <div className="flex justify-center">
          <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 flex justify-center shrink-0 rounded-r-none"
            >
              <div className="flex flex-col gap-3 justify-center items-center">
                <Avatar
                  size="xxl"
                  src={ user?.photoURL ? user?.photoURL: 
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  }
                  alt="avatar"
                />
                <Button className="bg-violet-500">Edit Profile</Button>
              </div>
            </CardHeader>
            <CardBody>
              <Typography className="mb-3 font-normal">
                <span className="font-bold">Full Name: </span>{" "}
                {user?.displayName}
              </Typography>
              <Typography className="mb-3 font-normal">
                <span className="font-bold">Email: </span> {user?.email}
              </Typography>
              <Typography className="mb-3 font-normal">
                <span className="font-bold">Applied Jobs: </span> {data?.length}
              </Typography>
              <Typography className="mb-3 font-normal">
                <span className="font-bold">Posted Jobs: </span> {jobs?.length}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  );
}
