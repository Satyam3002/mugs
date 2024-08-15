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

export default function Home() {
  return (
      <div className="flex flex-col">
        <Navbar textColor="text-black" backgroundColor="bg-white" />
        <About textColor="text-black" buttonColor="bg-customOrange" />
        <Aboutme textColor="text-black" />
         <Services textColor="text-black" />
         <Projects textColor="text-black" />
         <Testimonials textColor="text-black" bgColor="bg-white" />
         <Design />
         <Footer bgColor="bg-customBG" textColor="text-darkText" isDarkMode={false} />
         
         <Copyright />
      </div>
  );
}
