import WebTitle from '../../components/WebTitle';
import FeaturedSections from './featured/FeaturedSections';
import Hero from "./hero/Hero";
import JobCategories from './jobCategories/JobCategories';
import Testimonial from './testimonials/Testimonial';

export default function Home() {

    return (
        <div>
            <WebTitle>Home </WebTitle>
            <Hero/>
            <JobCategories/>
            <FeaturedSections/>
            <Testimonial/>
        </div>
    )
}