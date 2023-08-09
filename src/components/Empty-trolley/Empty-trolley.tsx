import { useNavigate } from 'react-router-dom';
import empty from '../../assets/empty.svg';
import S from './styles';

const EmptyTrolley = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <S.emptyTrolley>
      <S.emptyTrolleyText>
        Parece que não há nada por aqui :(
      </S.emptyTrolleyText>
      <S.emptyTrolleyImg src={empty} />
      <S.emptyTrolleyBtn onClick={handleClick}>
        VOLTAR
      </S.emptyTrolleyBtn>
    </S.emptyTrolley>
  );
};

export default EmptyTrolley;
