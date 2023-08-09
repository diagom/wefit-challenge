import { styled } from 'styled-components';

const quantityInput = styled.input`
  display: flex;
  width: 62px;
  height: 26px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-sizing: border-box;

  @media (max-width: 375px) {
    display: flex;
    padding: 16px 12px;
    flex: 1 0 0;
  }
`;

const styleList = {
  quantityInput,
};

export default styleList;
