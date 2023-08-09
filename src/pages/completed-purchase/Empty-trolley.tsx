import { useNavigate } from 'react-router-dom';
import completedPurchase from '../../assets/completed-purchase.svg';
import S from './styles';

const CompletedPurchase = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <S.CompletedPurchase>
      <S.CompletedPurchaseText>
        Compra realizada com sucesso!
      </S.CompletedPurchaseText>
      <S.CompletedPurchaseImg src={completedPurchase} />
      <S.CompletedPurchaseBtn onClick={handleClick}>
        VOLTAR
      </S.CompletedPurchaseBtn>
    </S.CompletedPurchase>
  );
};

export default CompletedPurchase;
