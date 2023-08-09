import LoaderSgv from '../../assets/Loader.png';
import S from './styles';

interface LoaderInterface {
  isLoadingActive: boolean;
}

const Loader = ({ isLoadingActive }: LoaderInterface) => (
  <>
    {isLoadingActive && (
      <S.loadContainer>
        <S.spinAnimation src={LoaderSgv} />
      </S.loadContainer>
    )}
  </>
);

export default Loader;
