import { useNavigate } from 'react-router-dom';
import S from './styles';
import trole from '../../assets/trole.svg';

function Header({ itemsSelected }: { itemsSelected: number }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/carrinho');
  }

  return (
    <S.headerContainer>
      <S.headerTitle>WeMovies</S.headerTitle>
      <S.trolleyContainer onClick={handleClick}>
        <S.textContainer>
          <S.text>Meu Carrinho</S.text>
          <S.itemCounter>{itemsSelected} items</S.itemCounter>
        </S.textContainer>
        <S.trolley src={trole} />
      </S.trolleyContainer>
    </S.headerContainer>
  );
}

export default Header;
