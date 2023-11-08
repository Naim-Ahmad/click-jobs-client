import Container from "../../../components/Container";
import SectionDescription from "../../../components/SectionDescription";
import SectionHeader from "../../../components/SectionHeader";
import SectionTitle from "../../../components/SectionTitle";
import TabsDefault from "./TabsDefault";

export default function JobCategories() {
  return (
    <div>
      <Container>
        <SectionHeader>
          <SectionTitle><span className="text-violet-500">Explore Jobs </span> by Category</SectionTitle>
          <SectionDescription>Our comprehensive job categories cover a wide range of fields and interests. Whether you&apos;re an experienced professional or just starting your career, find the perfect job category that aligns with your ambitions.</SectionDescription>
        </SectionHeader>
        <TabsDefault />
      </Container>
    </div>
  );
}
