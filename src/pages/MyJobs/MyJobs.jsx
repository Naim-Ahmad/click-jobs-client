import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbCalendarTime } from "react-icons/tb";
import Swal from "sweetalert2";
import Container from "../../components/Container";
import MySpinner from "../../components/MySpinner";
import NoContent from "../../components/NoContent";
import WebTitle from "../../components/WebTitle";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useJobsQuery from "../../hooks/useJobsQuery";
import EditJobs from "./EditJobs";

const TABLE_HEAD = [
  "Job Title",
  "Category",
  "Salary range",
  "Application Deadline",
  "Action",
];

export default function MyJobs() {
  const { user } = useAuth();

  const [open, setOpen] = useState({ id: "", state: false });

  const handleOpen = (id) => setOpen({ ...open, id, state: !open?.state });

  // console.log(open)

  const axios = useAxios();

  const queryClient = useQueryClient();

  const deleteJob = async (id) => {
    const res = await axios.delete(`/delete-job/${id}`);
    return res.data;
  };

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["delete-job"],
    mutationFn: deleteJob,
    onSuccess: queryClient.invalidateQueries({ queryKey: ["jobsQuery"] }),
  });

  const { jobs, isLoading, isError, error } = useJobsQuery(
    "loggedInUserEmail",
    user?.email
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
      }
    });
  };

  if (isLoading) return <MySpinner />;
  if (isError) return toast.error(error.message);

  if (isSuccess) {
    Swal.fire({
      title: "Deleted!",
      text: "Your job has been deleted.",
      icon: "success",
    });
  }

  return (
    <div>
      <WebTitle>My Jobs</WebTitle>
      <Container>
        <Card className="h-full w-full overflow-x-hidden">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center text-center justify-center gap-8">
              <div>
                <Typography variant="h1" color="blue-gray">
                  My <span className="text-violet-500">Jobs</span>
                </Typography>
                <Typography color="gray" className="mt-1 font-normal text-xl">
                  You can see your Posted Jobs
                </Typography>
              </div>
            </div>
          </CardHeader>
          {jobs.length ? (
            <CardBody className="overflow-x-hidden px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {jobs?.map(
                    (
                      {
                        _id,
                        jobBannerURL,
                        jobTitle,
                        loggedInUserName,
                        jobCategory,
                        salaryRange,
                        applicationDeadline,
                      },
                      index
                    ) => {
                      const isLast = index === jobs.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={_id}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar
                                src={jobBannerURL}
                                alt={jobTitle}
                                size="sm"
                              />
                              <div className="flex flex-col">
                                <Typography
                                  variant="lead"
                                  className=" text-violet-500 font-semibold"
                                >
                                  {jobTitle}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  Posted by: {loggedInUserName}
                                </Typography>
                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {jobCategory}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="w-max">{salaryRange}</div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal flex items-center gap-2"
                            >
                              <TbCalendarTime className="text-xl" />
                              {applicationDeadline}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Tooltip content="Edit Info">
                              <IconButton
                                onClick={() => handleOpen(_id)}
                                variant="text"
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>

                            <Tooltip content="Delete Job">
                              <IconButton
                                onClick={() => handleDelete(_id)}
                                variant="text"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </IconButton>
                            </Tooltip>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </CardBody>
          ) : (
            <NoContent>You haven&apos;t posted any jobs.</NoContent>
          )}
          {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter> */}
        </Card>
      </Container>

     <EditJobs open={open} handleOpen={handleOpen} />
    </div>
  );
}
