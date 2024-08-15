import Image from "next/image";
import Navbar from "@/components/Navbar/page";
import About from "@/components/About/page";
import Aboutme from "@/components/Aboutme/page";
import Services from "@/components/Services/page";
import Projects from "@/components/Projects/page";
import Footer from "@/components/Footer/page";
import Copyright from "@/components/Copyright/page";
import Testimonials from "@/components/Testimonials/page";
import Design from "@/components/Design/page";
import Test from "@/components/Test/page";

export default function Home() {
 return (
     <div className="flex bg-customBlack  flex-col">
        <Navbar />
        <About />
        <Aboutme />
        <Services />
        <Projects />
        <Test />
        <Design backgroundColor="bg-customBlack" textColor = 'text-white' />
        <Footer bgColor="" textColor="text-white" isDarkMode={true} />
        <Copyright bgClass="bg-customBG1" />
     </div>
 );
}
