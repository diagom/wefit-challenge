import { inTheTrolley } from '../../services/interfaces/in-the-trollay.interface.js';
import EmptyTrolley from '../../components/Empty-trolley';
import SelectedMovies from '../../components/Selected-movies';

interface buyingListPage {
  movies: inTheTrolley[];
  totalPrice: number;
  removeOneItem: Function;
  RemoveMovie: Function;
  setInTheTrolley: Function;
  setMovieByInput: Function;
}

function BuyingListPage({
  movies,
  totalPrice,
  removeOneItem,
  RemoveMovie,
  setInTheTrolley,
  setMovieByInput,
}: buyingListPage) {
  return (
    <>
      {movies.length === 0 ? (
        <EmptyTrolley />
      ) : (
        <SelectedMovies
          removeOneItem={removeOneItem}
          RemoveMovie={RemoveMovie}
          totalPrice={totalPrice}
          movies={movies}
          setInTheTrolley={setInTheTrolley}
          setMovieByInput={setMovieByInput}
        />
      )}
    </>
  );
}

export default BuyingListPage;
