import 'regenerator-runtime';
import Button from '../global/Button';
import Link from '../global/Link';
import { LINKS, SEARCH_FORM_ID } from '../../data/constants';
import SearchBar from '../global/SearchBar';


const Main: React.FC = () => {
    const logoImage: string = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    
    return ( 
        <div className="flex flex-col items-center flex-1 mt-20 md:mt-40">
            <img 
                className="logo-image w-[70%] sm:w-[180px] md:w-full max-w-[270px] max-h-[100px] " 
                src={logoImage} 
                alt="Google Logo" 
                height={100} 
                width={270} 
            />
            <SearchBar />
            <div className="flex flex-wrap justify-center gap-3 mt-7 sm:gap-0">
                <Button
                    type='submit'
                    form={SEARCH_FORM_ID}
                    text="Google Search"
                />
                <Button
                    handleClick={() => window.location.href = 'https://www.google.com/doodles'}
                    text="I'm Feeling Lucky"
                />
            </div>
            <p className="text-sm text-[#4d5156] mt-7 text-center flex justify-center flex-wrap">
                Google offered in: 
                {
                    LINKS.map((link) => (
                        <Link 
                            key={link.id}
                            text={link.text}
                            url={link.url}
                            classes={link.classes}
                        />
                    ))
                }
            </p>
        </div>
    );
}

export default Main;
