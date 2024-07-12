# Google Front Page Design

This is a clone of the Google front page. It also implements a functionality to search and get the result from the Google Search API.

## Tools and Technologies

* React.js
* TypeScript
* Tailwind CSS
* Axios as an HTTP client
* Node.js/Express for the backend
* SerpApi: Google Search API
* Vercel for hosting the frontend
* Render for hosting the backend
* Swagger for API Documentation

## Local Setup

To run the project locally, navigate to a folder of your choice on your local machine, then follow the following straightforward steps.

```bash
git clone https://github.com/Alight-Rw/Alight-Codin-Challenge.git coding-challenge
```

This will create a new folder called `coding-challenge`

```bash
cd coding-challenge
```

Then, install the project dependencies with the following command:
```bash
npm install
```

Finally, spin up the local development server with:

```bash
npm run dev
```

You should see a link in the terminal that looks something like: ```http://localhost:5174/``` Once, clicked it will open a tab in the browser where you will be able to see the project running locally.

## Folder Structure

```
project-root/
├── public/              # Static assets served by the web server
├── src/                 # Source code of the application
│   ├── components/      # Reusable UI components
│   ├── ├── global/      # Smaller UI components that can be used anywhere within the app
│   ├── ├── home/        # Page-specific components for the home page
│   ├── ├── search/      # Page-specific components for the search page
│   ├── ├── icons/       # SVG components that can be used anywhere in the app
│   ├── ├── pages/       # Page components
│   ├── data/            # Any sort of constant data used throughout the application
│   ├── types/           # Props/types are defined here and imported in the various components as needed
│   ├── App.tsx          # Root component of the React application
│   ├── index.tsx        # Entry point of the React application
├── tailwind.config.js   # Configuration file for Tailwind CSS
├--
```

## Backend Insights

Documentation of the backend is at: https://alight-coding-challenge-backend.onrender.com/api-docs
To make a GET request, you need to specify the search term like so, https://alight-coding-challenge-backend.onrender.com/search?q=${term}

Replace `${term}` with any query to see Google search results on that.

Voilà, thanks for checking out my project. I hope you have fun!
