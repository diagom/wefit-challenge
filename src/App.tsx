import { Route, Routes } from 'react-router-dom';
import AppStyle from './App.style';
import Header from './components/header';
import useMovieListHook from './hooks/movie-hook';
import MovieListPage from './pages/movie-list-page/movie-list-page';
import BuyingListPage from './pages/buying-list-page/buying-list-page';
import CompletedPurchase from './pages/completed-purchase';

function App() {
  const {
    movies,
    isLoadingActive,
    inTheTrolley,
    totalPrice,
    addNewItemInTheTrolley,
    removeOneItem,
    RemoveMovie,
    setMovieByInput,
  } = useMovieListHook();

  return (
    <AppStyle>
      <Header itemsSelected={inTheTrolley.length} />
      <Routes>
        <Route
          path="/"
          element={
            <MovieListPage
              movies={movies}
              isLoadingActive={isLoadingActive}
              inTheTrolley={inTheTrolley}
              setInTheTrolley={addNewItemInTheTrolley}
            />
          }
        />

        <Route
          path="/carrinho"
          element={
            <BuyingListPage
              removeOneItem={removeOneItem}
              RemoveMovie={RemoveMovie}
              setInTheTrolley={addNewItemInTheTrolley}
              setMovieByInput={setMovieByInput}
              totalPrice={totalPrice}
              movies={inTheTrolley}
            />
          }
        />

        <Route path="/comprado" element={<CompletedPurchase />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
