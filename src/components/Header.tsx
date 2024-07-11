import { TbGridDots } from "react-icons/tb";
import { HiBeaker } from "react-icons/hi";
import Link from "./global/Link";


const Header: React.FC = () => {
    const url: string = "https://lh3.googleusercontent.com/ogw/AF2bZyhkykt42Oz6ooTrmwbHb7Kdf03ZL2VCwO9qly5ghQ3sFYc=s32-c-mo";
    return ( 
        <div className="flex items-center justify-end pt-3 pr-4 space-x-3">
            <Link 
                text="Gmail"
                url="https://mail.google.com"
                classes="text-sm cursor-pointer hover:underline"
            />
            <Link 
                text="Images"
                url="https://images.google.com"
                classes="text-sm cursor-pointer hover:underline"
            />
            <HiBeaker className="p-2 text-4xl rounded-full cursor-pointer hover:bg-gray-200" />
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