import { useLocation } from 'react-router-dom';
import Header from '../search/Header';

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

const Search: React.FC = () => {
  const location = useLocation();
  const data: SearchResultData | undefined = location.state?.data;

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">No results found</h1>
      </div>
    );
  }

  const {
    search_information,
    related_questions,
    organic_results
  } = data;

  return (
    <div className="max-w-4xl p-4 mx-auto mt-8">
      <Header />
      <div className="flex flex-col mt-8 md:flex-row">
        <div className="flex-grow">
          <div className="mb-4">
            <p className="text-gray-600">About {search_information.total_results} results ({search_information.time_taken_displayed} seconds)</p>
          </div>

          <div className="mb-8">
            {organic_results.map((result, index) => (
              <div key={index} className="mb-6">
                <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600">{result.displayed_link}</a>
                <a href={result.link} target="_blank" rel="noopener noreferrer" className="block text-xl font-medium text-blue-800 hover:underline">{result.title}</a>
                <p className="text-gray-700">{result.snippet}</p>
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default Search;
