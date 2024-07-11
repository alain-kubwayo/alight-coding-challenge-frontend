import { TbGridDots } from "react-icons/tb";
import Link from "./global/Link";


const Header: React.FC = () => {
    const url: string = "https://lh3.googleusercontent.com/ogw/AF2bZyhkykt42Oz6ooTrmwbHb7Kdf03ZL2VCwO9qly5ghQ3sFYc=s32-c-mo";
    return ( 
        <div className="flex items-center justify-end pt-3 pr-4 space-x-3 navbar flex-wrap">
            <Link 
                text="Gmail"
                url="https://mail.google.com"
                classes="text-[13px] cursor-pointer hover:underline"
            />
            <Link 
                text="Images"
                url="https://images.google.com"
                classes="text-[13px] cursor-pointer hover:underline"
            />
            <div className="p-2 text-4xl text-gray-600 rounded-full cursor-pointer hover:bg-gray-200">
                <svg className="gb_g" focusable="false" height="24px" viewBox="0 -960 960 960" width="24px"> <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path> </svg>
            </div>
            <TbGridDots className="p-2 text-4xl rounded-full cursor-pointer hover:bg-gray-200" />
            <div className="p-1 rounded-full cursor-pointer hover:bg-gray-100">
                <div className="relative  rounded-full  w-[30px] h-[30px] border border-gray-300">
                    <img 
                        src={url} 
                        alt="Google Image" 
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Header;
