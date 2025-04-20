import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, fetchPersonCredits, fetchPersonDetails, fetchSearchMovies } from "../api/moviedb";

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMovies,
  });
};

export const useTopRatedMovies = () => {
    return useQuery({
      queryKey: ["top-rated-movies"],
      queryFn: fetchTopRatedMovies,
    });
  };

  export const useUpcomingMovies = () => {
    return useQuery({
      queryKey: ["upcoming-movies"],
      queryFn: fetchUpcomingMovies,
    });
  };
  // Movie Details
export const useMovieDetails = (id: string | number) => {
    return useQuery({
      queryKey: ["movie-details", id],
      queryFn: () => fetchMovieDetails(id),
      enabled: !!id, // only run if id is truthy
    });
  };
  
  // Movie Credits (Cast, Crew)
  export const useMovieCredits = (id: string | number) => {
    return useQuery({
      queryKey: ["movie-credits", id],
      queryFn: () => fetchMovieCredits(id),
      enabled: !!id,
    });
  };
  
  // Similar Movies
  export const useSimilarMovies = (id: string | number) => {
    return useQuery({
      queryKey: ["similar-movies", id],
      queryFn: () => fetchSimilarMovies(id),
      enabled: !!id,
    });
  };

  
export const usePersonDetails = (id: string | number) => {
    return useQuery({
      queryKey: ["person-details", id],
      queryFn: () => fetchPersonDetails(id),
      enabled: !!id,
    });
  };
  
  export const usePersonCredits = (id: string | number) => {
    return useQuery({
      queryKey: ["person-credits", id],
      queryFn: () => fetchPersonCredits(id),
      enabled: !!id,
    });
  };

  export const useSearchMovies = (query: string) => {
    return useQuery({
      queryKey: ["search-movies", query],
      queryFn: () => fetchSearchMovies(query),
      enabled: !!query && query.length > 1,
      staleTime: 1000 * 60 * 2, 
    });
  };