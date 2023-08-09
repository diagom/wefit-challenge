import { styled } from 'styled-components';

const emptyTrolley = styled.section`
  display: flex;
  width: 960px;
  padding: 64px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 32px;
  border-radius: 4px;
  background: #fff;

  @media (max-width: 375px) {
    width: 343px;
    overflow: hidden;
  }
`;

const emptyTrolleyText = styled.div`
  display: flex;
  width: 352px;
  height: 35px;
  flex-direction: column;
  justify-content: center;

  color: #2f2e41;
  text-align: center;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 375px) {
    width: 87%;
    height: auto;
    overflow: hidden;
  }
`;

const emptyTrolleyImg = styled.img`
  width: 447px;
  height: 265px;
`;

const emptyTrolleyBtn = styled.div`
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

  font-size: 12px;
  font-weight: 700;
`;

const styleList = {
  emptyTrolley,
  emptyTrolleyText,
  emptyTrolleyImg,
  emptyTrolleyBtn,
};

export default styleList;
