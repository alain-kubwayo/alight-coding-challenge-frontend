import { TbGridDots } from "react-icons/tb";

const Header = () => {
    const url: string = "https://lh3.googleusercontent.com/ogw/AF2bZyhkykt42Oz6ooTrmwbHb7Kdf03ZL2VCwO9qly5ghQ3sFYc=s32-c-mo";
    
    return ( 
        <div className="sticky top-0 z-50 flex justify-between bg-white">
            <img 
                className="logo-image w-[40%] sm:w-[90px] md:w-full max-w-[120px] max-h-[80px] " 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                alt="Google Logo" 
                height={92} 
                width={30} 
            />
            <div className="flex flex-wrap items-center justify-end pr-4 space-x-3 navbar">
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
        </div>
    );
}
 
export default Header;
