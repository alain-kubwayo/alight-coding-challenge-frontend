const Footer: React.FC = () => {
    return ( 
        <div className="absolute bottom-0 w-full bg-neutral-100">
            <p className="px-8 py-3 text-sm text-slate-600">Rwanda</p>
            <div className="flex px-8 py-3">
                <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
                    <li className="cursor-pointer hover:underline">About</li>
                    <li className="cursor-pointer hover:underline">Advertising</li>
                    <li className="cursor-pointer hover:underline">Business</li>
                    <li className="cursor-pointer hover:underline">How Search works</li>
                </ul>
                <ul className="flex ml-auto [&>*]:mr-6 text-sm text-slate-600">
                    <li className="cursor-pointer hover:underline">Privacy</li>
                    <li className="cursor-pointer hover:underline">Terms</li>
                    <li className="cursor-pointer hover:underline">Settings</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Footer;