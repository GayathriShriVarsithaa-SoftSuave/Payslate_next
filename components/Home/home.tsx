"use client"
import {useRef} from 'react';
import {motion,useInView} from "framer-motion";
export default function Home(){
    const ref=useRef(null);
    const isInView = useInView(ref);
    return(<section id="home">
        <div  className="bg-[url('/homeBg.png')] bg-cover bg-no-repeat bg-center h-[800px] w-[1851px] rounded-[24px] mx-auto">
            <div className="flex flex-row justify-around ">
                <div className="h-[703px] w-[673px] mt-[122px]">
                    <p className="leading-[150%] text-[16px] text-[#932EFA] font-semibold">Payslate</p>
                    <p className="font-bold leading-[120%] text-6xl ">Your Business Financial Chalkboard</p>
                    <p className="text-[18px] leading-[150%] mt-[40px]">Payslate brings your cash flow, material tracking, vendor management, and transactions into one secure, real-time platform built for industrial businesses.</p>
                    <div className="h-[48px] w-[312px] flex flex-row justify-between mt-[40px]">
                        <img src="/iOSstore.png" />
                        <img src="/androidstore.png" />
                    </div>
                </div>
                <div className="w-[354px] h-[327px] flex flex-col justify-between mt-[122px]">
                    <img src="/User.png" className="self-end h-[75px] w-[292px]"/>
                    <img src="/Card.png" className="self-start h-[116px] w-[294px]"/>
                </div>
                <motion.div className="mt-[122px]" animate={isInView ? { x:-700,y:900} :{ x:0,y:0}} transition={{ease:"easeIn",duration:0.7}}>
                    <img src="/mobile.png" className="h-[580px] w-[286px]"/>
                </motion.div>
            </div>
        </div>
        {/* second half */}
        <div className="h-[884px] bg-[white]">
            <div className="mt-[4px]">
                <motion.div initial={{y:-120,opacity:0}} animate={isInView ? { y:0,opacity:1} :{ y:-120,opacity:0}} transition={{ease:"easeIn",duration:0.6}} className="text-[#932EFA] font-semibold text-[16px] leading-[150%] uppercase w-[1403px] mx-auto">Features</motion.div>
                <div className="flex flex-row justify-between items-center h-[96px] w-[1403px] mx-auto">
                    <motion.div  initial={{y:-120,opacity:0}} animate={isInView ? { y:0,opacity:1} :{ y:-120,opacity:0}} transition={{ease:"easeIn",duration:0.6}} >
                        <p className="font-bold text-[40px] leading-[120%] h-[96px] w-[511px]">Your Data, Structured. Your Business, Simplified.</p>
                    </motion.div>
                    <motion.div  initial={{y:-120,opacity:0}} animate={isInView ? { y:0,opacity:1} :{ y:-120,opacity:0}} transition={{ease:"easeIn",duration:0.6}}>
                        <p className="text-[16px] leading-[150%] h-[72px] w-[453px]">Payslate ensures your financial records, material logs, and vendor data are organized, auditable, and securely managed with role-based access control and real-time synchronization.</p>
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-row justify-between w-[1403px] mx-auto mt-[110px]" >
                <motion.div className="bg-[#F1EFFF] h-[254px] w-[434px] rounded-[40px] " initial={{x:-420,opacity:0}} animate={isInView ? { x:0,opacity:1} :{ x:-420,opacity:0}}  transition={{duration:0.6, delay:0.3,ease:"easeIn"}} >
                    <div className="bg-[#804FB0] h-[68px] w-[68px] rounded-[20px] mt-[40px] ml-[40px]">
                    </div>
                    <p className="ml-[40px] mt-[14px] uppercase font-bold text-[18px] leading-[25px] tracking-[0.9px]">Cash Flow Tracking</p>
                    <p className="ml-[40px] mt-[14px] text-[14px] leading-[26px] ">Track every income and expense across yourbusiness with complete clarity.</p>
                </motion.div>
                <motion.div className="bg-[#EFF2FF] h-[254px] w-[434px] rounded-[40px]" initial={{x:420,opacity:0}} animate={isInView ? { x:0,opacity:1} :{ x:420,opacity:0}} transition={{duration:0.6, delay:0.3,ease:"easeIn"}}>
                    <div className="bg-[#804FB0] h-[68px] w-[68px] rounded-[20px] mt-[40px] ml-[40px]">

                    </div>
                    <p className="ml-[40px] mt-[14px] uppercase font-bold text-[18px] leading-[25px] tracking-[0.9px]">Automated Reporting</p>
                    <p className="ml-[40px] mt-[14px] text-[14px] leading-[26px] ">Generate instance financial summaries for owners, partners, vendors, and departments.</p>
                </motion.div>
            </div>
            <div className="flex flex-row justify-between w-[1403px] mx-auto mt-[110px]"  ref={ref}>
                <motion.div className="bg-[#EFF4FF] h-[254px] w-[434px] rounded-[40px] " initial={{x:-420,opacity:0}} animate={isInView ? { x:0,opacity:1} :{ x:-420,opacity:0}}  transition={{duration:0.6, delay:0.3,ease:"easeIn"}}>
                    <div className="bg-[#804FB0] h-[68px] w-[68px] rounded-[20px] mt-[40px] ml-[40px]">

                    </div>
                    <p className="ml-[40px] mt-[14px] uppercase font-bold text-[18px] leading-[25px] tracking-[0.9px]">Material Book Management</p>
                    <p className="ml-[40px] mt-[14px] text-[14px] leading-[26px] ">Monitor material purchases, pricing, quantities, and stock levels in one place.</p>
                </motion.div>
                <motion.div className="bg-[#FFEFFB] h-[254px] w-[434px] rounded-[40px]" initial={{x:420,opacity:0}} animate={isInView ? { x:0,opacity:1} :{ x:420,opacity:0}}  transition={{duration:0.6, delay:0.3,ease:"easeIn"}}>
                    <div className="bg-[#804FB0] h-[68px] w-[68px] rounded-[20px] mt-[40px] ml-[40px]">

                    </div>
                    <p className="ml-[40px] mt-[14px] uppercase font-bold text-[18px] leading-[25px] tracking-[0.9px]">Multi-User Collaboration</p>
                    <p className="ml-[40px] mt-[14px] text-[14px] leading-[26px] ">Assign custom roles for Owner, Partner, Manager and Employee with secure permission control</p>
                </motion.div>
            </div>

        </div>
    </section>);
}