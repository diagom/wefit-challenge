import { IMovies } from '../../services/interfaces/movie.interface';
import buyTrolley from '../../assets/trolley.svg';
import S from './styles';

const MovieCard = ({
  movie,
  toBuy,
  setInTheTrolley,
  isLoadingActive,
}: {
  movie: IMovies;
  toBuy: number;
  setInTheTrolley: Function;
  isLoadingActive: boolean;
}) => (
  <S.cardContainer $isLoadingActive={isLoadingActive}>
    <S.movieImg src={movie.image} />
    <S.movieCardTitle> {movie.title}</S.movieCardTitle>
    <S.movieCardPrice>R$ {movie.price}</S.movieCardPrice>
    <S.movieBtn
      $isSelected={toBuy > 0}
      onClick={() => setInTheTrolley(movie.id)}
    >
      <S.movieBtnText>
        <S.movieBtnImg src={buyTrolley} /> {toBuy}{' '}
      </S.movieBtnText>{' '}
      <S.movieBtnText>ADICIONAR AO CARRINHO</S.movieBtnText>
    </S.movieBtn>
  </S.cardContainer>
);

export default MovieCard;
