import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import Container from "../../../components/Container";
import MySpinner from "../../../components/MySpinner";
import SectionDescription from "../../../components/SectionDescription";
import SectionHeader from "../../../components/SectionHeader";
import SectionTitle from "../../../components/SectionTitle";
import axios from "../../../config/axios.config";
import CardWithLink from "./CardWithLink";

export default function FeaturedSections() {

  const {data, isLoading} = useQuery({
    queryKey: ["employs"],
    queryFn: async ()=>{
      const result  = await axios.get('/employs')
      return result.data;
    }
  })

  if(isLoading) return <MySpinner/>
  
  return (
    <div>
      <Container>
        <SectionHeader>
          <SectionTitle>
            Connect with Our{" "}
            <span className="text-violet-500">Top Employers</span>
          </SectionTitle>
          <SectionDescription>
            We are proud to introduce you to a handpicked collection of leading
            companies. Discover what makes these employers exceptional and why
            you should consider them for your career journey.
          </SectionDescription>
        </SectionHeader>

        <Marquee>
          <div className="flex gap-6 py-6">
           {data.map(d=> <CardWithLink key={d._id} data={d} />)}
          </div>
        </Marquee>
      </Container>
    </div>
  );
}
