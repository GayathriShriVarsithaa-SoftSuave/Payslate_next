"use client"
import {Button} from "@mui/material"
import {motion} from "framer-motion";
export default function DownloadApp(){
    return(
        <section id="downloadapp">
            <div className="mx-auto flex flex-col w-[1395px]">
                <p className="text-[#932EFA] font-semibold leading-[150%] text-[16px] uppercase">Download App</p>
                <div className="flex flex-row justify-between items-center h-[96px] w-[1395px] mx-auto">
                    <div>
                        <p className="font-bold text-[40px] leading-[120%] h-[96px] w-[592px]">Manage Cash, Materials & Vendors - All in One App</p>
                    </div>
                    <div>
                        <p className="text-[16px] leading-[150%] h-[72px] w-[377px]">Payslate is designed for industrial business that need structured financial workflows, secure collaboration, and real-time visibility.</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-row justify-around w-[1395px] mx-auto mt-[80px] ">
                <motion.div className="bg-[#F7F8FD] h-[775px] w-[654px] rounded-[16px] overflow-hidden" initial="rest" whileHover="hover">
                    <p className="font-bold text-[42px] leading-[55px] mt-[48px] ml-[48px]">Download for iOS</p>
                    <p className="mt-[16px] text-[16px] leading-[32px] ml-[48px] mt-[16px]">Track transactions, manage materials, and monitor vendors securely on your iPhone.</p>
                    <Button onClick={()=>window.open("https://apps.apple.com/in/app/payslate/id6737227735")} sx={{marginLeft:"48px",backgroundColor:"#804FB0",borderRadius:"30px",color:"white",marginTop:"16px"}}>App store</Button>
                    <motion.img src="/iOS.png" className="mx-auto mt-[275px] hidden sm:flex" variants={{initial:{y:200},hover:{y:0}}} transition={{duration:0.3}}/>
                </motion.div>

                <motion.div className="bg-[#FEFCF9] h-[775px] w-[654px] rounded-[16px] overflow-hidden" initial="rest" whileHover="hover">
                    <p className="font-bold text-[42px] leading-[55px] mt-[48px] ml-[48px]">Download for Android</p>
                    <p className="mt-[16px] text-[16px] leading-[32px] ml-[48px] mt-[16px]">Complete financial control for your industrial business - anytime, anywhere</p>
                    <Button onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.dotmite.payslate")} sx={{marginLeft:"48px",backgroundColor:"#804FB0",borderRadius:"30px",color:"white",marginTop:"16px"}}>Play store</Button>
                    <motion.img src="/android.png" className="mx-auto mt-[275px] hidden sm:flex" variants={{initial:{y:200},hover:{y:0}}} transition={{ duration:0.3}}/>
                </motion.div>
            </div>
        </section>
    );
}