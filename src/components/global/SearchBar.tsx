import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import Microphone from "../icons/Microphone"
import Camera from "../icons/Camera"

const SearchBar = () => {
  return (
    <form 
                className="flex items-center w-11/12 px-5 py-2 border-2 rounded-full md:py-3 md:w-2/5 mt-7 hover:shadow-md"
            >
                <AiOutlineSearch className="flex-shrink-0 text-xl text-slate-400" />
                <input 
                    type="text" 
                    className="w-full ml-4 focus:outline-none"
                />
                {
                    true ? 
                        <BsFillMicFill 
                            className="flex-shrink-0 w-10 h-auto px-2 text-3xl cursor-pointer text-slate-400" 
                        />
                            : 
                        <div className="px-2 cursor-pointer">
                            <Microphone 
                                classes="text-3xl w-6 h-6 flex-shrink-0"
                            />
                        </div>
                }
                <Camera classes="text-3xl w-6 h-6 cursor-pointer flex-shrink-0" />
            </form>
  )
}

export default SearchBar
