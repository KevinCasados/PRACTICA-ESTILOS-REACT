import axios from "axios";
import { useEffect, useState } from "react"

type Movies = {
    id: number;
    title: string;
    vote_average: number;
    release_date: string;
    poster_path: string;
}

type FetchMoviesState = {
    movies: Movies[];
    isLoading: boolean;
    error: string | null;
}

const useFetchMovies = () => {
    const [moviesState, setMoviesState] = useState<FetchMoviesState> ({movies: [], isLoading: true, error: null});

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a85be56dc67f8ab1e609b7a198187160`);
                setMoviesState({movies: response.data.results, isLoading: false, error: null});
            } catch (error) {
                setMoviesState({movies: [], isLoading: false, error:"Failed to fetch movies"});

            }

        };

        fetchMovies();
    }, []);

    return moviesState;
};

export default useFetchMovies;