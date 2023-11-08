import Container from "../../../components/Container";
import SectionDescription from "../../../components/SectionDescription";
import SectionHeader from "../../../components/SectionHeader";
import SectionTitle from "../../../components/SectionTitle";
import CardWithLink from "./CardWithLink";

export default function FeaturedSections() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardWithLink/>
            <CardWithLink/>
            <CardWithLink/>
        </div>
      </Container>
    </div>
  );
}
