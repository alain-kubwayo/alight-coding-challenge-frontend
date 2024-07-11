import { leftLinksDetails, rightLinksDetails } from "../data/links";
import Link from "./global/Link";

const Footer: React.FC = () => {
    return ( 
        <footer className="absolute bottom-0 w-full text-primary bg-primary-100">
            <p className="px-[30px] py-[15px] text-[15px] border-b border-slate-200">Rwanda</p>
            <div className="flex px-5 text-sm">
                <div className="flex text-sm">
                    {
                        leftLinksDetails.map(link => (
                            <Link 
                                key={link.id} 
                                text={link.text}
                                url={link.url}
                                classes={link.classes}
                            />
                        ))
                    }
                </div>
                <div className="flex ml-auto text-sm">
                    {
                        rightLinksDetails.map(link => (
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