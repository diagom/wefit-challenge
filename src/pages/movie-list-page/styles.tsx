import { styled } from 'styled-components';

const movieContiner = styled.section`
  display: flex;
  height: 100%;
  width: 960px;
  justify-content: space-between;
  align-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 375px) {
    display: flex;
    width: 100svw;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const styleList = {
  movieContiner,
};

export default styleList;
