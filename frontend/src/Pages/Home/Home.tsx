import Hero from './Hero/Hero';
import Communities from './Communities/Communities';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import FAQ from '../../Components/FAQ/FAQ';

export default function Home() {
    return (
        <>
            <Hero />
            <Communities />
            <FeaturedProjects />
            <Services />
            <Testimonials />
            <FAQ />
        </>
    );
}
