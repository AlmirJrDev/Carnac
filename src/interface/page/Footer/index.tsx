import { HoverCardDemo } from "@/interface/components/hovercard";
import { ArrowRight } from "lucide-react";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {


  return (
    <footer className="flex flex-col  bg-white p-8 ">
      

        <div className="flex justify-around  pb-8 ">
        <img className="w-40" src="./src/assets/logo.svg" alt="" />
            <div className="flex ">
              <ul className="flex flex-col ">
                <p className="text-gray-700 mb-2">Buy</p>
                <li>Sedan</li>
                <li>SUV</li>
                <li>Hatchback</li>
                <li>Coupe</li>
              </ul>
            </div>
            <div className="flex">
            <ul className="flex flex-col ">
                <p className="text-gray-700 mb-2">Buy</p>
                <li>Sedan</li>
                <li>SUV</li>
                <li>Hatchback</li>
                <li>Coupe</li>
              </ul>
            </div>
            <div className="">
            <ul className="flex flex-col ">
                <p className="text-gray-700 mb-2">Buy</p>
                <li>Sedan</li>
                <li>SUV</li>
                <li>Hatchback</li>
                <li>Coupe</li>
              </ul>
            </div>
            <div className="">
              <p>Subcribe to the newsletter</p>
              <form className="flex mt-2 justify-center items-center" action="">
                <input placeholder="E-mail" className="bg-gray-100 p-4 w-96 rounded-md h-10" type="email" />
                <button className="bg-orange-500  w-10 h-10 flex items-center justify-center rounded-r-md text-white text-sm"><ArrowRight/></button>
              </form>
              <div className="flex mt-10 gap-2"><a className="flex items-center justify-center rounded-full w-8 h-8 bg-slate-950" href=""><FacebookLogo color="white" size={22} /></a> <a className="flex items-center justify-center rounded-full w-8 h-8 bg-slate-950" href=""><InstagramLogo color="white" size={22} /></a> <a className="flex items-center justify-center bg-slate-950 rounded-full h-8 w-8" href=""><WhatsappLogo color="white" size={22} /></a> </div>
            </div>
        </div>
        <div className="flex pt-8 justify-between items-center  border-t">
     
          <span className="font-semibold ">2024 CARNAC All Right &reg;</span>        <HoverCardDemo/> <div className="flex gap-8"><span>Terms of use</span><span>Privacy Policy</span><span>User Agreement</span></div>
      
        </div>
       

    </footer>
  );
}