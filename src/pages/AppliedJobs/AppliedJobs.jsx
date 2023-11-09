import { Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Container from "../../components/Container";
import MySpinner from "../../components/MySpinner";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import WebTitle from "../../components/WebTitle";
import useAppliedJobs from "../../hooks/useAppliedJobs";
import useAuth from "../../hooks/useAuth";
import AppliedCard from "./AppliedCard";

export default function AppliedJobs() {
  const { user } = useAuth();

  let { data, isLoading, isError, error, isFetched } = useAppliedJobs(
    user?.email
  );

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (isFetched) setJobs(data);
  }, [data]);

  const handleSelect = (e) => {
    const selectedCategory = e.toLowerCase();
    if (selectedCategory === "all") {
      return setJobs(data);
    }

    const filteredJobs = data?.filter(
      (obj) => obj?.jobCategory?.toLowerCase() === selectedCategory
    );

    setJobs(filteredJobs);
  };

  if (isLoading) return <MySpinner />;

  if (isError) {
    toast.error(error.message);
    return console.log(error);
  }

  console.log(jobs);

  return (
    <div>
      <WebTitle>Applied Jobs</WebTitle>
      <Container>
        <SectionHeader>
          <SectionTitle>
            Applied <span className="text-violet-500">Jobs</span>
          </SectionTitle>
          <SectionDescription>You can see your applied Jobs</SectionDescription>
          <div className="w-1/2 mx-auto">
            <Select
              name="jobCategory"
              variant="outlined"
              label="Select Category"
              onChange={handleSelect}
            >
              <Option value="All">All</Option>
              <Option value="on site">On Site</Option>
              <Option value="remote">Remote</Option>
              <Option value="part time">Part Time</Option>
              <Option value="hybrid">Hybrid</Option>
            </Select>
          </div>
        </SectionHeader>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <AppliedCard key={job._id} job={job} />
          ))}
        </div>
      </Container>
    </div>
  );
}
