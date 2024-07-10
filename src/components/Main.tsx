import 'regenerator-runtime';
import { useState } from "react";
import { AiOutlineSearch, AiFillCamera } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Main: React.FC = () => {
    const googleLogo: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    const [search, setSearch] = useState<string>('');

    const {
        transcript,
        listening,
        // resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startListening = () => {
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
        window.location.href = `https://www.google.com/search?q=${search}`;
    }
    
    return ( 
        <div className="flex flex-col items-center mt-28">
            <img src={googleLogo} alt="Google Logo" height={100} width={270} />
            <form 
                className="flex items-center w-2/5 px-5 py-2 border rounded-full mt-7 hover:shadow-md"
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
                            className="mr-5 text-3xl text-slate-400" 
                            onClick={() => stopListening()}
                        />
                    : 
                        <BiMicrophone 
                            className="mr-5 text-3xl text-slate-400" 
                            onClick={() => startListening()}
                        />
                }
                
                <AiFillCamera className="text-3xl text-slate-400" />
            </form>
            <div className="mt-7">
                <button 
                    className="px-4 py-2 mr-3 text-sm rounded bg-slate-100 hover:border"
                    onClick={(e) => handleSubmit(e)}
                >
                    Google Search
                </button>
                <button 
                    className="px-4 py-2 text-sm rounded bg-slate-100 hover:border"
                    onClick={() => window.location.href = 'https://www.google.com/doodles'}
                >
                    I'm Feeling Lucky
                </button>
            </div>
        </div>
     );
}
 
export default Main;