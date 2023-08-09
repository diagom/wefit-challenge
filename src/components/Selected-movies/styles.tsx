import { styled } from 'styled-components';

const selectedContainer = styled.section`
  display: flex;
  width: 960px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  justify-content: flex-start;

  @media (max-width: 375px) {
    width: 343px;
    height: 85svh;
    padding: 16px;
  }
`;

const SelectedsTitlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 691px;
  height: 20px;
  margin-bottom: 21px;

  @media (max-width: 375px) {
    display: none;
  }
`;

const bannerImg = styled.img`
  width: 89px;
  height: 114px;

  @media (max-width: 375px) {
    width: 64px;
    height: 82px;
    margin-right: 16px;
    grid-area: 1 / 1 / 3 / 2;
  }
`;

const lineContainer = styled.div`
  display: flex;
  gap: 52px;
  align-self: stretch;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 21px;

  @media (max-width: 375px) {
    gap: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    .div3 {
      grid-area: 1 / 5 / 2 / 6;
    }
    .div4 {
    }
    .div5 {
    }
  }
`;

const textContainer = styled.div`
  display: flex;
  width: 253px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (max-width: 375px) {
    width: 200px;
    grid-area: 1 / 2 / 2 / 5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const textMovieTitle = styled.div`
  color: #2f2e41;
  font-size: 14px;
  font-weight: 700;
`;

const textMoviePrice = styled.div`
  color: #2f2e41;
  font-size: 16px;
  font-weight: 700;
`;

const inputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  @media (max-width: 375px) {
    width: 117px;
    grid-area: 2 / 2 / 3 / 4;
  }
`;

const actionIcons = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const startText = styled.div`
  width: 167px;
  height: 20px;
  box-sizing: border-box;
  color: #999;
  font-size: 14px;
  font-weight: 700;
  margin-right: auto;
`;

const middleText = styled.div`
  width: 171px;
  height: 20px;
  box-sizing: border-box;
  color: #999;
  font-size: 14px;
  font-weight: 700;
`;

const endText = styled.div`
  height: 20px;
  box-sizing: border-box;
  color: #999;
  font-size: 14px;
  font-weight: 700;
`;

const subTotalContainer = styled.div`
  color: #2f2e41;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 213px;

  @media (max-width: 375px) {
    width: auto;
    justify-self: flex-end;
    text-align: end;
    grid-area: 2 / 4 / 3 / 6;

    span {
      justify-self: flex-end;
    }
  }
`;

const subTotalMobile = styled.div`
  color: #999;
  font-size: 12px;
  font-weight: 700;

  @media (min-width: 375px) {
    display: none;
  }
`;

const binContainer = styled.div`
  @media (max-width: 375px) {
    grid-area: 1 / 5 / 2 / 6;
    align-self: center;
    justify-self: right;
  }
`;

const finishLine = styled.img`
  height: 1px;
  align-self: stretch;
  margin: 21px 0;
  margin-top: auto;
`;

const totalConstainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;

  height: 40px;

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 77px;
  }
`;

const finishBtn = styled.div`
  width: 180px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #009edd;
  cursor: pointer;

  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  margin-right: auto;
  font-size: 12px;
  font-weight: 700;

  @media (max-width: 375px) {
    margin-top: 16px;
    width: 100%;
    grid-area: 2 / 1 / 3 / 4;
  }
`;

const totalText = styled.div`
  color: #999;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  @media (max-width: 375px) {
    grid-area: 1 / 1 / 2 / 3;
    justify-self: end;
  }
`;

const totalValue = styled.div`
  color: #2f2e41;
  text-align: center;
  font-size: 24px;
  font-weight: 700;

  display: flex;
  min-width: 130px;
  height: 21px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 375px) {
    width: 130px;
    grid-area: 1 / 3 / 2 / 4;
  }
`;

const styleList = {
  selectedContainer,
  SelectedsTitlesContainer,
  bannerImg,
  lineContainer,
  textContainer,
  inputContainer,
  actionIcons,
  startText,
  middleText,
  endText,
  subTotalContainer,
  binContainer,
  finishBtn,
  finishLine,
  totalConstainer,
  totalText,
  totalValue,
  textMoviePrice,
  textMovieTitle,
  subTotalMobile,
};

export default styleList;
