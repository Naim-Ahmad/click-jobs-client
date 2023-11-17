import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import MySpinner from "../../../components/MySpinner";
import SectionDescription from "../../../components/SectionDescription";
import SectionHeader from "../../../components/SectionHeader";
import SectionTitle from "../../../components/SectionTitle";
import useAxios from "../../../hooks/useAxios";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const axios = useAxios()

  const {data, isLoading} = useQuery({
    queryKey: ['stories'],
    queryFn: async ()=> {
      const res = await axios.get('/stories')
      return res.data
    }
  })

  if(isLoading)return <MySpinner/>

  return (
    <div>
      <Container>
        <SectionHeader>
          <SectionTitle>
          <span className="text-violet-500"> Success Stories </span> from Our Users
          </SectionTitle>
          <SectionDescription>
          Listen to the experiences and successes of individuals who have used our platform to transform their careers. These are the stories of our valued users.
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          
         {data?.map(d=> <TestimonialCard key={d._id} data={d}/>)}
        </div>
      </Container>
    </div>
  );
}
