import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyNano from '@/components/WhyNano';
import CreatorScroll from '@/components/CreatorScroll';
import DualCTA from '@/components/DualCTA';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <WhyNano />
                <CreatorScroll />
                <DualCTA />
            </main>
            <Footer />
        </>
    );
}
