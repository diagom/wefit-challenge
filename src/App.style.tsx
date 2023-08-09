import { styled } from 'styled-components';

const AppStyle = styled.section`
  display: flex;
  font-family: Open Sans;
  background: #2f2e41;
  color: #ffffff;
  width: 100svw;
  min-height: 100svh;
  flex-direction: column;
  align-items: center;

  @media (max-width: 375px) {
    height: max-content;
    padding: 16px;
    box-sizing: border-box;
  }
`;

export default AppStyle;
