import { apiKey } from "@/constants";

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndPoint= `${apiBaseUrl}/trending/movie/day?language=en-US?api_key=${apiKey}`;	
const upcomingMoviesEndPoint= `${apiBaseUrl}/movie/upcoming?language=en-US?api_key=${apiKey}`;
const topRatedMoviesEndPoint= `${apiBaseUrl}/movie/top_rated?language=en-US?api_key=${apiKey}`;
const movieDetailsEndPoint= id => `${apiBaseUrl}/movie/${id}?language=en-US?api_key=${apiKey}`;
const movieCreditsEndPoint= id => `${apiBaseUrl}/movie/${id}/credits?language=en-US?api_key=${apiKey}`;
const similarMoviesEndpoint= id => `${apiBaseUrl}/movie/${id}/similar?language=en-US?api_key=${apiKey}`;

const personDetailsEndpoint= id => `${apiBaseUrl}/person/${id}?language=en-US?api_key=${apiKey}`;
const personCreditsEndpoint= id => `${apiBaseUrl}/person/${id}/movie_credits?language=en-US/?api_key=${apiKey}`;


const searchMovies = (query: string) =>
  `${apiBaseUrl}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

export const image500 = (path: any) => path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path: any) => path? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path: any) => path? `https://image.tmdb.org/t/p/w185${path}` : null;

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
  export const fetchMovieDetails = (id: number | string) => {
    return get(`${apiBaseUrl}/movie/${id}?language=en-US`);
  };
  
  export const fetchMovieCredits = (id: number | string) => {
    return get(`${apiBaseUrl}/movie/${id}/credits?language=en-US`);
  };
  
  export const fetchSimilarMovies = (id: number | string) => {
    return get(`${apiBaseUrl}/movie/${id}/similar?language=en-US`);
  };
  export const fetchPersonDetails = (id: string | number) => {
    return get(personDetailsEndpoint(id));
  };
  
  export const fetchPersonCredits = (id: string | number) => {
    return get(personCreditsEndpoint(id));
  };
  export const fetchSearchMovies = (query: string) => {
    if (!query || query.trim() === "") return Promise.resolve({ results: [] });
    return get(searchMovies(query));
  };
  
  