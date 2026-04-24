"use client"
import {Button} from '@mui/material'
export default function HowItWorks(){
    return(
        <section id="how-it-works" className="bg-[#FFFFFF] w-full h-[1416px]">
            <div className="bg-[#F6F6F6] h-[1416px]">
            <div className="flex flex-row justify-between items-center h-[124px] w-[1404] mx-auto pt-[120px] mb-[120px]">
                <div>
                    <p className="text-[16px] font-semibold text-[#932EFA] uppercase leading-[150%]">How It Works</p>
                    <p className="font-bold text-[40px] leading-[120%] mt-[4px]">Manage Your Business Finances <br />in 3 Simple Steps</p>
                </div>
                <div>
                    <a href="#downloadapp">
                    <Button sx={{color:"white",textTranform:"false",backgroundColor:"#804FB0",borderRadius:"30px"}}>Get Started Now</Button></a>
                </div>
            </div>
            <div className="mt-48px bg-[white] w-[1400px] mx-auto flex flex-row justify-between mt-[48px] rounded-3xl">
                <div className="h-[248px] w-[360px] mt-[24px] ml-[24px]">
                    <div className="h-[80px] w-[312px] mt-[48px]">
                        <p className="font-bold text-[20px] leading-[120%]">Create Your Business Profile</p>
                        <p className="text-[16px] leading-[150%] mt-[8px]">Set up your industrial business in minutes and define roles for your team.</p>
                    </div>
                </div>
                <div className="h-[248px] w-[360px] mt-[24px]">
                    <div className="h-[80px] w-[312px] mt-[48px]">
                        <p className="font-bold text-[20px] leading-[120%]">Create Books & Categories</p>
                        <p className="text-[16px] leading-[150%] mt-[8px]">Organize operations with dedicated Cash Book, Material Book, and Vendor records.</p>
                    </div>
                </div>
                <div className="h-[248px] w-[360px] mt-[24px] mr-[24px]">
                    <div className="h-[80px] w-[312px] mt-[48px]">
                        <p className="font-bold text-[20px] leading-[120%]">Track, Collaborate & Analyze</p>
                        <p className="text-[16px] leading-[150%] mt-[8px]">Track transactions, share access, and get real-time insights.</p>
                    </div>
                </div>

            </div>
            <div className="h-[660px] w-[1400px] rounded-3xl mx-auto mt-[24px]">
                <video loop autoPlay muted className="rounded-3xl w-full">
                    <source src="https://payslate.dotmite.com/How%20It%20Works.mp4" type="video/mp4" />
                </video>
            </div></div>
        </section>
    );
}