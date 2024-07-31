// // import React from 'react'

// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// import axios from "../utils/axios";
// import TopNav from "./partials/TopNav";
// import DropDown from "./partials/DropDown";
// import Cards from "./partials/Cards";
// import Loading from "./Loading";

// const Movie = () => {
//   const navigate = useNavigate();
//   const [category, setcategory] = useState("now_playing");

//   const [movie, setmovie] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   document.title = "Movies HUNT | Movies" + category.toUpperCase();

//   const getMovie = async () => {
//     try {
//       const { data } = await axios.get(`/movie/${category}?page=${page}`);
//       // console.log(data);
//       //   setmovie(data.results);
//       if (data.results.length > 0) {
//         setmovie((prevState) => [...prevState, ...data.results]);
//         setPage(page + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   const refreshHandler = async () => {
//     if (movie.length === 0) {
//       await getMovie();
//     } else {
//       setPage(1);
//       setmovie([]);
//       await getMovie();
//     }
//   };

//   useEffect(() => {
//     refreshHandler();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [category]);

//   return movie.length > 0 ? (
//     <div className="w-screen h-screen ">
//       {/* navbar */}
//       <div className="p-4 pr-8 w-full h-[14vh]  flex items-center ">
//         <h1 className="text-2xl text-zinc-200 p-6 mr-10 font-semibold flex items-center">
//           <i
//             onClick={() => navigate(-1)}
//             className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
//           ></i>
//           Movies <span className="text-base ml-5">{category}</span>
//         </h1>

//         <div className="flex items-center w-[90%] ml-[-3%]">
//           <TopNav />
//           <DropDown
//             title="catagory"
//             options={["popular", "top_rated", "upcoming", "now_playing"]}
//             func={(e) => setcategory(e.target.value)}
//           />
//           <div className="p-3"></div>
//         </div>
//       </div>
//       {/* body */}
//       <InfiniteScroll
//         dataLength={movie.length}
//         next={getMovie()}
//         hasMore={hasMore}
//         loader={<h1>loading...</h1>}
//       >
//         <Cards data={movie} title={category} />
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Movie;

// import React from 'react'

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axios from "../utils/axios";
import DropDown from "./partials/DropDown";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import TopNav from "./partials/TopNav";

const Movie = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "Movies HUNT | Movies " + category.toUpperCase();

  const getMovie = useCallback(async () => {
    try {
      // console.log(`Fetching page ${page} for category ${category}`);
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      // console.log(data);
      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1); // Increment page for next fetch
      } else {
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.log("Error", error);
    }
  }, [category, page]);

  const refreshHandler = useCallback(async () => {
    setPage(1); // Reset page number
    setHasMore(true); // Reset hasMore to true
    setmovie([]); // Clear current movie list
    await getMovie(); // Fetch first page of new category
  }, [getMovie]);

  useEffect(() => {
    refreshHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen ">
      {/* navbar */}
      <div className="p-4 pr-8 w-full h-[14vh] flex items-center ">
        <h1 className="text-2xl text-zinc-200 p-6 mr-10 font-semibold flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-5 hover:text-[#6556CD]"
          ></i>
          Movies <span className="text-base ml-5">{category}</span>
        </h1>
        <div className="flex items-center w-[90%] ml-[-3%]">
          <TopNav />
        </div>

        <div className="flex items-center ml-[-3%]">
          <DropDown
            title="category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="p-3"></div>
        </div>
      </div>
      {/* body */}
      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
