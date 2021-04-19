import styled from 'styled-components';

export const SectionStyle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 863px;
  width: 100%;
  background-image: url(https://i.ibb.co/M5H4HM4/bg-heroees.jpg);
`;

export const Container = styled.div`
  display: inline-block;
  align-items: center;
  text-align: center;
  width: 470px;
  height: 330px;
  background-color: white;
  border-radius: 31px;

  @media (max-width: 420px) {
    width: 330px;
    height: 383px;
  }
`;

export const Title = styled.h1`
  color: #f00;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Bangers', cursive;
  font-size: 50px;
  margin-top: 43px;
`;

export const Forms = styled.form`
  display: grid;
  justify-content: center;
`;

export const Access = styled.button`
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

export const InputInformations = styled.input`
  padding: 11px;
  color: black;
  display: block;
  margin-bottom: 13px;
`;
