import { styled } from 'styled-components';

const spinAnimation = styled.img`
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const loadContainer = styled.div`
  display: flex;
  height: 85svh;
  width: 960px;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 375px) {
    width: 100svw;
  }
`;

const styleList = {
  loadContainer,
  spinAnimation,
};

export default styleList;
