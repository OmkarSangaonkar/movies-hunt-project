# Movies Hunt

Movies Hunt is a web application that allows users to search and browse information about movies, TV series, actors, directors, and more. The app fetches data from The Movie Database (TMDB) API and presents it in an easy-to-navigate interface.

## Deployed Link

[Movies Hunt](https://movies-hunt-project.vercel.app/)

## Features

- **Home Page**:
  - Search bar to search for movies, TV series, actors, and directors.
  - Side navigation with sections for new feeds and website information.
- **Sections**:
  - **Trending**: Displays trending movies and TV shows with filter options.
  - **Popular**: Shows popular movies, TV shows, and people.
  - **Movies**: Lists all movies with filter options.
  - **TV Shows**: Lists all TV shows with filter options.
  - **People**: Displays popular actors, directors, and more.
- **Details Page**:
  - Shows detailed information about selected movies, TV shows, or people.
  - Plays trailers using React Player.
- **Global Components**:
  - **Loading**: Displays a loading spinner while fetching data.
  - **404**: Shows a 404 page if the route is not found.
- **Infinite Scrolling**: Loads more data as the user scrolls down the page.
- **Horizontal Marquee**: Displays similar information in a scrolling marquee.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **React Router DOM**: For client-side routing.
- **Tailwind CSS**: For styling.
- **React Infinite Scroll**: For implementing infinite scrolling.
- **Framer Motion**: For adding animations and horizontal marquee.
- **React Player**: For playing video trailers.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OmkarSangaonkar/movies-hunt.git
   cd movies-hunt
   ```
