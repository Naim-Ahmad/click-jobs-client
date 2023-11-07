import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import MySpinner from '../../../components/MySpinner';
import useJobs from "../../../hooks/useJobs";
import HorizontalCard from "./HorizontalCard";

export default function TabsDefault() {
  const {jobs, isError, isLoading, error } = useJobs()

  // console.log(filteredByCategory)

  const data = [
    {
      label: "On Site",
      value: "on site",
    },
    {
      label: "Remote",
      value: "remote",
    },
    {
      label: "Part Time",
      value: "part time",
    },
    {
      label: "Hybrid",
      value: "hybrid",
    },
  ];
console.log(jobs)
  if(isError){
    toast.error(error?.message)
  }

  return (
    <Tabs value="on site">
      <TabsHeader className="max-w-4xl mx-auto">
        {data.map(({ label, value }) => (
          <Tab className="z-1" key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
        {isLoading ? <MySpinner/> : data.map(({ value }) => (
          <TabPanel className="min-h-fit" key={value} value={value}>
            {isError && <Typography as="h3" variant="h3" className="text-center">{error?.message}</Typography>}
            <div className="grid lg:grid-cols-3 gap-6">
              {jobs?.map((job) => {
                if (job.jobCategory.toLowerCase() === value) {
                  return <HorizontalCard key={job._id} job={job}/>;
                }
              })}
            </div>
            {/* <div className="text-center my-5">
            <Link to="/all-jobs"><PrimaryButton>View All Jobs</PrimaryButton></Link>
            </div> */}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
