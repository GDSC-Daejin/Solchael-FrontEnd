import styled from 'styled-components';
import { Colors } from './Colors';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  flex-direction: column;
`;

export const Container = styled.div`
  margin-top: 50px;
  width: 85%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ContentBox = styled.div`
  margin-top: 30px;
  width: 220px;
  height: 300px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 24px;
`;
export const SmallInput = styled.input`
  border: 3px solid ${Colors.main3};
  border-radius: 40px;
  padding: 10px;
  font-size: 1rem;
  width: 200px;
  outline: none;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
export const SquareBtn = styled.button`
  background-color: ${Colors.main3};
  color: #fff;
  border-radius: 0px;
  font-size: 1rem;
  padding: 7px;
  width: 100%;
  margin-top: 30px;
  border: none;
  font-weight: 600;
`;
export const LoginInput = styled.input`
  width: calc(100% - 20px);
  border-radius: 3px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 10px;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  color: #000;
  font-size: 10px;
  :hover {
    color: ${Colors.green8};
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
`;
export const RoundBtn = styled.button`
  background-color: ${Colors.main3};
  color: #fff;
  border-radius: 20px;
  font-size: 1rem;
  padding: 7px;
  width: 100%;
  border: none;
  font-weight: 600;
`;
