import 'regenerator-runtime';
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from './global/Button';
import Link from './global/Link';
import Microphone from './icons/Microphone';
import Camera from './icons/Camera';
import { LINKS } from '../data/constants';


const Main: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const logoImage: string = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";

    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startListening = (): React.ReactNode | void => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    }

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setSearch(transcript);
    }

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!search.trim()) {
            return;
        }
        window.location.href = `https://www.google.com/search?q=${search}`;
    }
    
    return ( 
        <div className="flex flex-col items-center justify-center mt-40">
            <img 
                className="logo-image" 
                src={logoImage} 
                alt="Google Logo" 
                height={100} 
                width={270} 
            />
            <form 
                className="flex items-center w-4/5 px-5 py-3 border-2 rounded-full md:w-2/5 mt-7 hover:shadow-md"
                onSubmit={(e) => handleSubmit(e)}
            >
                <AiOutlineSearch className="text-xl text-slate-400" />
                <input 
                    type="text" 
                    className="w-full ml-4 focus:outline-none"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search || transcript}
                />
                {
                    listening ? 
                        <BsFillMicFill 
                            className="w-10 h-auto px-2 text-3xl cursor-pointer text-slate-400" 
                            onClick={() => stopListening()}
                        />
                            : 
                        <div onClick={() => startListening()} className="px-2 cursor-pointer">
                            <Microphone 
                                classes="text-3xl w-6 h-6"
                            />
                        </div>
                }
                <Camera classes="text-3xl w-6 h-6 cursor-pointer" />
            </form>
            <div className="mt-7">
                <Button
                    handleClick={e => handleSubmit(e)}
                    text="Google Search"
                />
                <Button
                    handleClick={() => window.location.href = 'https://www.google.com/doodles'}
                    text="I'm Feeling Lucky"
                />
            </div>
            <p className="text-sm text-[#4d5156] mt-7">
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
