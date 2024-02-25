import styled from 'styled-components';
import { Colors } from './Colors';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  flex-direction: column;
  .rank_container {
    position: absolute;
    top: 193px;
    left: 43%;
    transform: translateX(-43%);
    width: 50%;
    background-color: aliceblue;
    p {
      font-size: 1.3rem;
      padding: 5px 10px;
    }
  }
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
  margin-bottom: 10px;
`;
export const SquareBtn = styled.button`
  background-color: ${Colors.main3};
  color: #fff;
  border-radius: 0px;
  font-size: 1.1rem;
  padding: 10px;
  width: 100%;
  margin: 20px 0 7px;
  border: none;
  font-weight: 600;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export const LoginInput = styled.input`
  width: calc(100% - 20px);
  border-radius: 3px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 12px 10px;
  margin-top: 20px;
  font-size: 1rem;
  & + & {
    margin-bottom: 20px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 18px;
`;
export const StyledLink = styled(Link)`
  color: #000;
  font-size: 14px;
  text-decoration: none;
  :hover {
    color: ${Colors.main3};
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
`;
export const RoundLink = styled(Link)`
  background-color: ${Colors.main3};
  color: #fff;
  border-radius: 20px;
  font-size: 1rem;
  padding: 10px;
  width: 200px;
  border: none;
  font-weight: 600;
  text-decoration: none;
  display: block;
  text-align: center;
`;

export const Welcome = styled.div`
  font-size: 22px;
  font-weight: 600;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
