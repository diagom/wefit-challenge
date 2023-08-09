import { styled } from 'styled-components';

const cardContainer = styled.div<{ $isLoadingActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 310px;
  max-height: 305px;

  padding: 10px 11px;
  margin-top: 16px;

  border-radius: 4px;
  background: #fff;

  text-align: center;

  @media (max-width: 375px) {
    width: 343px;
  }

  ${(props) => props.$isLoadingActive && 'display: none;'};
`;

const movieCardTitle = styled.span`
  color: #333;
  font-size: 12px;
  font-weight: 700;
`;

const movieCardPrice = styled.span`
  color: #2f2e41;
  font-size: 16px;
  font-weight: 700;
`;

const movieImg = styled.img`
  width: 147px;
  height: 188px;
  margin-bottom: 7px;
`;

const movieBtn = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;

  border-radius: 4px;
  margin-top: 8px;
  height: 40px;
  gap: 12px;

  ${(props) =>
    props.$isSelected
      ? 'background: #039B00;'
      : 'background: #009edd'};

  cursor: pointer;
`;

const movieBtnText = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;

  font-size: 12px;
  font-weight: 700;
`;

const movieBtnImg = styled.img`
  width: 13.6px;
  height: 13.6px;
  flex-shrink: 0;
`;

const styleList = {
  cardContainer,
  movieCardTitle,
  movieCardPrice,
  movieImg,
  movieBtn,
  movieBtnText,
  movieBtnImg,
};

export default styleList;
