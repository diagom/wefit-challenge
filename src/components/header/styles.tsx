import { styled } from 'styled-components';

const headerContainer = styled.header`
  display: flex;
  width: 960px;
  padding: 18px 10px;
  margin-bottom: 24px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 375px) {
    width: 100svw;
  }
`;

const trolleyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const textContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const trolley = styled.img``;

const headerTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
`;

const text = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`;

const itemCounter = styled.div`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #999999;
`;

const headerStyleList = {
  headerTitle,
  text,
  itemCounter,
  headerContainer,
  trolleyContainer,
  textContainer,
  trolley,
};

export default headerStyleList;
