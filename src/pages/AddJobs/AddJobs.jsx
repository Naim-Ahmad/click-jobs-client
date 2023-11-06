import Container from "../../components/Container";
import SectionDescription from "../../components/SectionDescription";
import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import WebTitle from "../../components/WebTitle";

export default function AddJobs() {
  return (
    <>
      <WebTitle>Post Jobs | Click Jobs</WebTitle>
      <div>
        <Container>
          <SectionHeader>
            <SectionTitle>Advertise Your Job <span className="text-violet-500">Opportunity</span></SectionTitle>
            <SectionDescription>
              Ready to find the perfect candidate for your job opening? Post
              your job on our platform and reach a pool of talented job seekers.
              It&apos;s quick and easy!
            </SectionDescription>
          </SectionHeader>
        </Container>
      </div>
    </>
  );
}
