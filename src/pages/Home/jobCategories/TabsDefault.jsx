import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import MySpinner from '../../../components/MySpinner';
import PrimaryButton from "../../../components/PrimaryButton";
import axios from "../../../config/axios.config";
import HorizontalCard from "./HorizontalCard";

export default function TabsDefault() {
  const getJobs = async () => {
    const res = await axios.get("/jobs");
    return res.data;
  };

  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  // console.log(filteredByCategory)

  const data = [
    {
      label: "On Site",
      value: "on site",
    },
    {
      label: "Remote",
      value: "react",
    },
    {
      label: "Part Time",
      value: "vue",
    },
    {
      label: "Hybrid",
      value: "angular",
    },
  ];

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
        {isLoading ? <MySpinner/> :data.map(({ value }) => (
          <TabPanel className="min-h-fit" key={value} value={value}>
            <div className="grid lg:grid-cols-2 gap-4">
              {jobs?.map((job) => {
                if (job.jobCategory.toLowerCase() === value) {
                  return <HorizontalCard key={job._id} job={job}/>;
                }
              })}
            </div>
            <div className="text-center my-5">
            <Link to="/all-jobs"><PrimaryButton>View All Jobs</PrimaryButton></Link>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
