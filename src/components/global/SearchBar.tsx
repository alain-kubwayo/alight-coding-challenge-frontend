import type { FC, MouseEvent } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import { SEARCH_FORM_ID } from "../../data/constants";
import Camera from "../icons/Camera";
import Microphone from "../icons/Microphone";

type SearchBarProps = {
	containerClassName?: string;
};

const SearchBar: FC<SearchBarProps> = ({ containerClassName }) => {
	const { transcript, listening, browserSupportsSpeechRecognition } =
		useSpeechRecognition();
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const startListening = () => {
		SpeechRecognition.startListening({ continuous: true, language: "en-US" });
	};

	const stopListening = () => {
		SpeechRecognition.stopListening();
		setSearch(transcript);
	};

	const handleSubmit = async (
		e:
			| React.FormEvent<HTMLFormElement>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (!search.trim()) {
			return;
		}
		navigate(`/search?q=${search}`);
	};

	if (!browserSupportsSpeechRecognition) return null;

	return (
		<form
			className={`flex items-center w-11/12 px-5 py-2 border-2 rounded-full md:py-3 md:w-2/5 hover:shadow-md ${containerClassName}`}
			onSubmit={handleSubmit}
			id={SEARCH_FORM_ID}
		>
			<AiOutlineSearch className="flex-shrink-0 text-xl text-slate-400" />
			<input
				type="text"
				className="w-full ml-4 focus:outline-none"
				onChange={(e) => setSearch(e.target.value)}
				value={search || transcript}
			/>
			{listening ? (
				<BsFillMicFill
					className="flex-shrink-0 w-10 h-auto px-2 text-3xl cursor-pointer text-slate-400"
					onClick={() => stopListening()}
				/>
			) : (
				<div className="px-2 cursor-pointer" onClick={() => startListening()}>
					<Microphone classes="text-3xl w-6 h-6 flex-shrink-0" />
				</div>
			)}
			<Camera classes="text-3xl w-6 h-6 cursor-pointer flex-shrink-0" />
		</form>
	);
};

export default SearchBar;
