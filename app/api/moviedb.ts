import { apiKey } from "@/constants";

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndPoint= `${apiBaseUrl}/trending/movie/day?language=en-US?api_key=${apiKey}`;	
const upcomingMoviesEndPoint= `${apiBaseUrl}/movie/upcoming?language=en-US?api_key=${apiKey}`;
const topRatedMoviesEndPoint= `${apiBaseUrl}/movie/top_rated?language=en-US?api_key=${apiKey}`;
const get = async (endpoint: string) => {
    const response = await fetch(`${endpoint}&api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };
  
  export const fetchTrendingMovies = () => {
    return get(`${apiBaseUrl}/trending/movie/day?language=en-US`);
  };
  
  export const fetchUpcomingMovies = () => {
    return get(`${apiBaseUrl}/movie/upcoming?language=en-US`);
  };
  
  export const fetchTopRatedMovies = () => {
    return get(`${apiBaseUrl}/movie/top_rated?language=en-US`);
  };