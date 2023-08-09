import S from './styles.jsx';
import Loader from '../../components/Loader';
import { IMovies } from '../../services/interfaces/movie.interface.js';
import MovieCard from '../../components/Movie-card/';
import { inTheTrolley } from '../../services/interfaces/in-the-trollay.interface.js';

interface moveListPage {
  movies: IMovies[];
  isLoadingActive: boolean;
  setInTheTrolley: Function;
  inTheTrolley: inTheTrolley[];
}

function MovieListPage({
  movies,
  isLoadingActive,
  setInTheTrolley,
  inTheTrolley,
}: moveListPage) {
  return (
    <S.movieContiner>
      <Loader isLoadingActive={isLoadingActive} />
      {movies.map((movie) => (
        <MovieCard
          isLoadingActive={isLoadingActive}
          key={movie.id}
          movie={movie}
          toBuy={
            inTheTrolley.find((selected) => {
              return selected.movie.id === movie.id;
            })?.quantity || 0
          }
          setInTheTrolley={setInTheTrolley}
        />
      ))}
    </S.movieContiner>
  );
}

export default MovieListPage;
