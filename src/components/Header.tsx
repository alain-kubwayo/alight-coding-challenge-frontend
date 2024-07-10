import { TbGridDots } from "react-icons/tb";


const Header: React.FC = () => {
    const url: string = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb=-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
    return ( 
        <div className="flex items-center justify-end pt-3 pr-4 space-x-3">
            <a href="https://mail.google.com" className="text-sm cursor-pointer hover:underline">Gmail</a>
            <a href="https://images.google.com" className="text-sm cursor-pointer hover:underline">Images</a>
            <TbGridDots className="p-2 text-4xl rounded-full hover:bg-gray-200" />
            <img 
                src={url} 
                alt="Google Image" 
                className="w-[30px] rounded-full object-cover" 
                style={{ height: 30 }}
            />
        </div>
    );
}
 
export default Header;