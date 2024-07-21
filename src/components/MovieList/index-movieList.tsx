import React, { Fragment } from "react";
import useFetchMovies from "../../hooks/useFetchMovies";
import Header from "../Header";
import { AppButton, MovieElement, MovieImage, MovieInfo, MovieListTitle, MovieSection, MovieTitle } from "./styles";

const MovieList = () => {
  const {movies, isLoading, error} = useFetchMovies();



  const renderMovies = () => (
    <MovieSection>
        {movies.map((movie) => {
          const { title, vote_average, id, release_date, poster_path } =
            movie;

          return (
            <MovieElement key={id}>
              <MovieImage
                alt={`${title} Movie Poster`}
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                width="200"
              />
              <MovieTitle>{title}</MovieTitle>
              <MovieInfo score={Number(vote_average)}>Vote Average: <span>{vote_average}</span></MovieInfo>
              <MovieInfo>Release Date: <span>{release_date}</span></MovieInfo>
              <AppButton></AppButton>
            </MovieElement>
          );
        })}
      </MovieSection>
  );

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error al cargar Peliculas</p>;
    return renderMovies();
  }

  return (
    <Fragment>
        <Header appName="CinemaApp"/>
        <MovieListTitle>MOVIES</MovieListTitle>
        {renderContent()}
    </Fragment>
  );
};

export default MovieList;
