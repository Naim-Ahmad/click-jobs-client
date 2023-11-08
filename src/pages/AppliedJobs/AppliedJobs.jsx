import { Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MySpinner from "../../components/MySpinner";
import useAppliedJobs from "../../hooks/useAppliedJobs";
import useAuth from "../../hooks/useAuth";

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
    if(selectedCategory === "all"){
      return setJobs(data)
    }

    const filteredJobs = data?.filter(
      (obj) => obj?.jobCategory?.toLowerCase() === selectedCategory
    );
  
    setJobs(filteredJobs);
  };

  if (isLoading) return <MySpinner />;

  if (isError) return toast.error(error.message);

  return (
    <div>
      {jobs.length}
      <Select
        name="jobCategory"
        variant="outlined"
        label="All"
        onChange={handleSelect}
      >
        <Option value="All">All</Option>
        <Option value="on site">On Site</Option>
        <Option value="remote">Remote</Option>
        <Option value="part time">Part Time</Option>
        <Option value="hybrid">Hybrid</Option>
      </Select>
    </div>
  );
}
