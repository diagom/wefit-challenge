import React, { useEffect, useState } from 'react';
import api from '../services/movies.api';
import { IMovies } from '../services/interfaces/movie.interface';
import { inTheTrolley } from '../services/interfaces/in-the-trollay.interface';

const useMovieListHook = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [isLoadingActive, setIsLoadingActive] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [inTheTrolley, setInTheTrolley] = useState<inTheTrolley[]>(
    []
  );

  const removeOneItem = (movieId: number) => {
    const newInTheTrolley = [...inTheTrolley];
    const HasAlreadyAdded = inTheTrolley.findIndex(
      (TrolleyItem) => TrolleyItem.movie.id === movieId
    );

    if (inTheTrolley[HasAlreadyAdded].quantity !== 1) {
      const newItem: inTheTrolley = {
        movie: inTheTrolley[HasAlreadyAdded].movie,
        quantity: inTheTrolley[HasAlreadyAdded].quantity - 1,
      };
      newInTheTrolley.splice(HasAlreadyAdded, 1, newItem);
    } else {
      newInTheTrolley.splice(HasAlreadyAdded, 1);
    }

    setInTheTrolley(newInTheTrolley);
  };

  const RemoveMovie = (movieId: number) => {
    const newInTheTrolley = [...inTheTrolley];
    const HasAlreadyAdded = inTheTrolley.findIndex(
      (TrolleyItem) => TrolleyItem.movie.id === movieId
    );

    newInTheTrolley.splice(HasAlreadyAdded, 1);

    setInTheTrolley(newInTheTrolley);
  };

  const setMovieByInput = (movieId: number, quantity: number) => {
    const newInTheTrolley = [...inTheTrolley];
    const HasAlreadyAdded = inTheTrolley.findIndex(
      (TrolleyItem) => TrolleyItem.movie.id === movieId
    );

    const newItem: inTheTrolley = {
      movie: inTheTrolley[HasAlreadyAdded].movie,
      quantity,
    };
    newInTheTrolley.splice(HasAlreadyAdded, 1, newItem);

    setInTheTrolley(newInTheTrolley);
  };

  const addNewItemInTheTrolley = (movieId: number) => {
    const newInTheTrolley = [...inTheTrolley];
    const HasAlreadyAdded = inTheTrolley.findIndex(
      (TrolleyItem) => TrolleyItem.movie.id === movieId
    );

    if (HasAlreadyAdded !== -1) {
      const newItem: inTheTrolley = {
        movie: inTheTrolley[HasAlreadyAdded].movie,
        quantity: inTheTrolley[HasAlreadyAdded].quantity + 1,
      };
      newInTheTrolley.splice(HasAlreadyAdded, 1, newItem);
    } else {
      const movie = movies.find((movie) => movie.id === movieId)!;

      newInTheTrolley.push({
        movie: movie,
        quantity: 1,
      });
    }

    setInTheTrolley(newInTheTrolley);
  };

  useEffect(() => {
    setIsLoadingActive(true);
    api
      .get('products')
      .then((response) => setMovies(response.data))
      .then(() =>
        setTimeout(() => {
          setIsLoadingActive(false);
        }, 3500)
      );
  }, []);

  useEffect(() => {
    let price = 0;
    inTheTrolley.forEach((movies) => {
      price = price + movies.quantity * movies.movie.price;
    });

    setTotalPrice(price);
  }, [inTheTrolley]);

  return {
    movies,
    isLoadingActive,
    inTheTrolley,
    totalPrice,
    setMovieByInput,
    addNewItemInTheTrolley,
    removeOneItem,
    RemoveMovie,
  };
};

export default useMovieListHook;
