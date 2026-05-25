import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import Stats from "../components/Stats.tsx";
import Services from "../components/Services.tsx";
import Process from "../components/Process.tsx";
import Reviews from "../components/Reviews.tsx";
import Calculator from "../components/Calculator.tsx";
import Faq from "../components/Faq.tsx";
import Footer from "../components/Footer.tsx";

function Home() {
    return (
        <div className="relative">
            <Navbar />
            <main className="pt-[80px]">
                {/* Top sections with margin lines */}
                <div className="max-w-7xl mx-auto border-x border-gray-200/80 relative">
                    <div className="border-t border-gray-200/80"></div>
                    <Hero />
                    <div className="border-t border-gray-200/80"></div>
                    <Stats />
                    <div className="border-t border-gray-200/80"></div>
                    <Services />
                    <div className="border-t border-gray-200/80"></div>
                    <Process />
                </div>
                
                {/* Bottom sections without margin lines */}
                <div className="border-t border-gray-200/80 max-w-7xl mx-auto"></div>
                <Reviews />
                <Calculator />
                <Faq />
                <Footer />
            </main>
        </div>
    )
}
export default Home;