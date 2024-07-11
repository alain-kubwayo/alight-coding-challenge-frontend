import { LEFT_LINKS_DETAILS, RIGHT_LINKS_DETAILS } from "../data/constants";

import Link from "./global/Link";

const Footer: React.FC = () => {
    return ( 
        <footer className="w-full text-primary bg-primary-100">
            <p className="px-[30px] py-[15px] text-[15px] border-b border-slate-300">Rwanda</p>
            <div className="flex flex-wrap px-5 text-sm">
                <div className="flex flex-wrap text-sm">
                    {
                        LEFT_LINKS_DETAILS.map(link => (
                            <Link 
                                key={link.id} 
                                text={link.text}
                                url={link.url}
                                classes={link.classes}
                            />
                        ))
                    }
                </div>
                <div className="flex ml-auto text-sm flex-wrap">
                    {
                        RIGHT_LINKS_DETAILS.map(link => (
                            <Link 
                                key={link.id} 
                                text={link.text}
                                url={link.url}
                                classes={link.classes}
                            />
                        ))
                    }
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
