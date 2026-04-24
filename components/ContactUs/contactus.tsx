"use client"
import {Button} from "@mui/material"
export default function Contactus(){
    return(<section id="contact-us" className="bg-[url('/contactusBg.png')] bg-cover bg-center bg-no-repeat h-[454px]">
        <div className="mx-auto">
            <div className="flex flex-row gap-[69px]">
                <div className="h-[275px] w-[575px] mt-[80px] ml-[260px]">
                    <p className="text-[#932EFA] font-semibold text-[16px] leading-[150%] uppercase">contact us</p>
                    <div>
                        <p className="font-bold text-[56px] leading-[130%] mt-[24px]">We are always happy to assist you</p>
                        <a href="mailto:support@dotmite.com">
                        <Button sx={{ textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", backgroundColor: "#804FB0", color:"white", borderRadius:"16px",marginTop:"24px"}}>Contact Us</Button></a>
                    </div>
                </div>
                <div className="flex flex-row h-[294px] w-[722px] mt-[80px] justify-between mr-[294px]">
                    <div>
                        <p className="font-semibold text-[22px] leading-[100%] mt-[32px]">Email Address</p>
                        <div className="h-[3px] w-[27px] bg-[black] mt-[25px]"></div>
                        <p className="font-semibold text-[22px] leading-[100%] mt-[27px]">support@dotmite.com</p>
                        <div>
                            <p className="text-[20px] leading-[32px] mt-[25px]">Assistance hours:</p>
                            <p className="text-[20px] leading-[32px] mt-[25px]">Monday - Friday 10am to 5 pm IST</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-[22px] leading-[100%] mt-[32px]">Number</p>
                        <div className="h-[3px] w-[27px] bg-[black] mt-[25px]"></div>
                        <p className="font-semibold text-[22px] leading-[100%] mt-[27px]">+91 88672 16460</p>
                        <div>
                            <p className="text-[20px] leading-[32px] mt-[25px]">Assistance hours:</p>
                            <p className="text-[20px] leading-[32px] mt-[25px]">Monday - Friday 10am to 5 pm IST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}