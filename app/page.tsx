import Contactus from "@/components/ContactUs/contactus"
import Navbar from "../components/Navbar/navbar";
import Home1 from "@/components/Home/home";
import DownloadApp from "@/components/DownloadApp/downloadapp"
import HowItWorks from "../components/HowItWorks/howItWorks";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Home1 />
      <HowItWorks />
      <DownloadApp />
      <Contactus />
    </div>
  );
}