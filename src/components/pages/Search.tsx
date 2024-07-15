import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../search/Header";
import { useCallback, useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

type SearchMetadata = {
	id: string;
	status: string;
	featured_snippet?: {
		title: string;
		snippet: string;
		link: string;
	};
};

type SearchParameters = {
	engine: string;
	q: string;
};

type SearchInformation = {
	total_results: number;
	time_taken_displayed: string;
};

type RelatedQuestion = {
	question: string;
	link: string;
	snippet: string;
};

type OrganicResult = {
	link: string;
	displayed_link: string;
	title: string;
	snippet: string;
};

type SearchResultData = {
	search_metadata: SearchMetadata;
	search_parameters: SearchParameters;
	search_information: SearchInformation;
	related_questions: RelatedQuestion[];
	organic_results: OrganicResult[];
};

const navLinks = ["All", "Images", "Videos", "News", "Maps", "Books", "Web"];

const Search: React.FC = () => {
	const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [data, setData] = useState<SearchResultData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNavlink, setSelectedNavlink] = useState("All");

  const fetchData = useCallback(async () => {
		if (!query) {
			setError("No search query provided");
			setIsLoading(false);
			return;
		}

		try {
			const result = await axios.get(`https://alight-coding-challenge-backend.onrender.com/search?q=${query}`);
			setData(result.data);
		} catch (error) {
			setError(`Error fetching data related to ${query}`);
		} finally {
			setIsLoading(false);
		}
	}, [query]);


  useEffect(() => {
    fetchData();
  }, [fetchData])

	if (isLoading) {
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<FadeLoader />
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="text-3xl font-bold text-gray-600 uppercase">{error}</h1>
			</div>
		);
	}

	if (!data) {
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="text-3xl font-bold text-gray-600 uppercase">No results found</h1>
			</div>
		);
	}

	const { search_information, related_questions, organic_results } = data;

	return (
		<div className="w-full mx-auto mt-5 max-w-7xl">
			<div className="w-full">
				<Header />
			</div>

      <div className="mt-8">
        <div className="absolute left-0 w-full h-px bg-gray-300 mt-7"></div>
        <div className="flex max-w-6xl gap-4 mx-auto">
          {navLinks.map((link, index) => (
            <div
              className="relative flex flex-col items-center cursor-pointer min-w-10"
              onClick={() => setSelectedNavlink(link)}
              key={index}
            >
              <a key={index} className="text-sm text-gray-600 hover:text-black">
                {link}
              </a>
              {selectedNavlink === link && (
                <div className="absolute w-full h-1 mt-6 bg-blue-600 rounded-sm justify-self-end" />
              )}
            </div>
          ))}
        </div>
      </div>

			<div className="max-w-6xl p-4 mx-auto mt-3">
				<div className="flex flex-col mt-8 md:flex-row">
					<div className="flex-grow">
						<div className="mb-4">
							<p className="text-gray-600">
								About {search_information.total_results} results (
								{search_information.time_taken_displayed} seconds)
							</p>
						</div>

						<div className="mb-8">
							{organic_results.map((result, index) => (
								<div key={index} className="mb-6">
									<a
										href={result.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-green-600"
									>
										{result.displayed_link}
									</a>
									<a
										href={result.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block text-xl font-medium text-blue-800 hover:underline"
									>
										{result.title}
									</a>
									<p className="text-gray-700">{result.snippet}</p>
								</div>
							))}
						</div>

            { related_questions?.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-2 text-lg font-bold">People also ask</h2>
                <ul>
                  {related_questions.map((question, index) => (
                    <li key={index} className="mb-4">
                      <a
                        href={question.link}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {question.question}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
