import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inTheTrolley } from '../../services/interfaces/in-the-trollay.interface';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import bin from '../../assets/bin.svg';
import line from '../../assets/line.svg';
import S from './styles';
import AmountMoviesInput from '../amount-movies-input';

interface buyingListPage {
  movies: inTheTrolley[];
  totalPrice: number;
  removeOneItem: Function;
  RemoveMovie: Function;
  setInTheTrolley: Function;
  setMovieByInput: Function;
}

const SelectedMovies = ({
  movies,
  totalPrice,
  removeOneItem,
  RemoveMovie,
  setInTheTrolley,
  setMovieByInput,
}: buyingListPage) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/comprado');
  }

  return (
    <S.selectedContainer>
      <S.SelectedsTitlesContainer>
        <S.startText>PRODUTO</S.startText>
        <S.middleText>QTD</S.middleText>
        <S.endText>SUBTOTAL</S.endText>
      </S.SelectedsTitlesContainer>

      {movies.map((moviesSelected) => (
        <S.lineContainer key={moviesSelected.movie.id}>
          <S.bannerImg src={moviesSelected.movie.image} />
          <S.textContainer>
            <S.textMovieTitle>
              {moviesSelected.movie.title}
            </S.textMovieTitle>
            <S.textMoviePrice>
              R$ {moviesSelected.movie.price.toFixed(2)}
            </S.textMoviePrice>
          </S.textContainer>
          <S.inputContainer>
            <S.actionIcons
              src={minus}
              onClick={() => removeOneItem(moviesSelected.movie.id)}
            />

            <AmountMoviesInput
              initialValue={moviesSelected.quantity}
              movieId={moviesSelected.movie.id}
              handleChangeSetValue={setMovieByInput}
            />

            <S.actionIcons
              src={plus}
              onClick={() => setInTheTrolley(moviesSelected.movie.id)}
            />
          </S.inputContainer>
          <S.subTotalContainer>
            <S.subTotalMobile>SUBTOTAL</S.subTotalMobile>
            <span>
              R${' '}
              {(
                moviesSelected.movie.price * moviesSelected.quantity
              ).toFixed(2)}
            </span>
          </S.subTotalContainer>
          <S.binContainer>
            <S.actionIcons
              src={bin}
              onClick={() => RemoveMovie(moviesSelected.movie.id)}
            />
          </S.binContainer>
        </S.lineContainer>
      ))}

      <S.finishLine src={line} />

      <S.totalConstainer>
        <S.finishBtn onClick={handleClick}>
          FINALIZAR PEDIDO
        </S.finishBtn>
        <S.totalText>TOTAL</S.totalText>
        <S.totalValue>R$ {totalPrice.toFixed(2)}</S.totalValue>
      </S.totalConstainer>
    </S.selectedContainer>
  );
};

export default SelectedMovies;
