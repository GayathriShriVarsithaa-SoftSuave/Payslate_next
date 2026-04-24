import Contactus from "@/components/ContactUs/contactus"
import Navbar from "../components/Navbar/navbar";
import Home1 from "@/components/Home/home";
import DownloadApp from "@/components/DownloadApp/downloadapp"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Home1 />
      <DownloadApp />
      <Contactus />
    </div>
  );
}
