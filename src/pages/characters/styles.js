import styled from 'styled-components';

export const SectionStyle = styled.div`
  background-color: black;
  margin-top: -28px;
`;

export const Title = styled.h1`
  color: #f00;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Bangers', cursive;
  font-size: 57px;
  text-align: center;
  padding-top: 34px;
`;

export const TableContainer = styled.div`
  background-color: white;
  margin-left: 26px;
  margin-right: 26px;
  border-radius: 21px;
  padding-left: 10px;
  padding-right: 10px;
  transform: translateY(-10px);
`;
export const ModalContainer = styled.div`
  font-family: 'Bangers', cursive;
`;
export const ModalButton = styled.button`
  background-color: #f00;
  border: 1px solid #f00;
  padding: 11px 47px;
  border-radius: 14px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Anton', sans-serif;
  box-shadow: 5px 7px 12px 0px #888888;
`;

export const ModalImg = styled.img`
  width: 250px;
  border: 3px solid;
`;

export const DetailsModal = styled.div`
  display: flex;
  padding-bottom: 33px;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 420px) {
    display: block;
  }
`;

export const Name = styled.h2`
  font-family: 'Noto Sans KR', cursive;
  text-align: initial;

  span {
    font-size: 18px;
    color: #f00;
    font-weight: 600;
  }
`;

export const Description = styled.p`
  font-family: 'Noto Sans KR', cursive;
  font-weight: 400;
  text-align: initial;

  span {
    font-size: 15px;
    color: #f00;
    font-weight: 600;
  }
`;

export const InformModal = styled.div`
  display: block;
  padding-left: 20px;
  padding-right: 200px;
  text-align: -webkit-right;

  @media (max-width: 420px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TitleHero = styled.h1`
  font-family: 'Bangers', cursive;
  font-size: 21px;
  letter-spacing: 2px;
  color: #f00;
  font-weight: 600;
`;

export const ListHero = styled.li`
  font-size: 15px;
  font-family: 'Noto Sans KR', cursive;
  list-style: square;
`;
