import Scene3D from '@/components/Scene3D';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TurkeyMap from '@/components/TurkeyMap';
import ReferencesSection from '@/components/ReferencesSection';
import QualitySection from '@/components/QualitySection';
import Footer from '@/components/Footer';

const Index = () => {
    return (
        <div className="min-h-screen gradient-dark relative">
            <Scene3D />
            <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <StatsSection />
                <TurkeyMap />
                <ReferencesSection />
                <QualitySection />
                <Footer />
            </div>
        </div>
    );
};

export default Index;
