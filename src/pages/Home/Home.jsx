import WebTitle from '../../components/WebTitle';
import Hero from "./hero/Hero";
import JobCategories from './jobCategories/JobCategories';

export default function Home() {

    return (
        <div>
            <WebTitle>Home | Click Jobs</WebTitle>
            <Hero/>
            <JobCategories/>
        </div>
    )
}