import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    // return if initially no movies present in store
    if (movies === null) return;

    return (
        <div className="bg-gray-900 bg-opacity-90 text-white p-4">
            <h1 className="text-2xl pb-3">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map(movie =>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    )}
                </div>
            </div>

        </div>
    )
}

export default MovieList;