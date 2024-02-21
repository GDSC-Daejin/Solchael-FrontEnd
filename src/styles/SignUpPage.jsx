import styled from 'styled-components';
import { Colors } from '../styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    margin: 40px 0 40px;
  }
`;
export const Line = styled.hr`
  width: 100%;
  border: 1px solid #373737;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80vw;
  max-width: 400px;
  .button-10 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    border-radius: 6px;
    border: none;
    color: #fff;
    background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
    background-origin: border-box;
    box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    transition: all .4s;
    &:hover {
      font-size: 16px;
    }
  }
`;
export const GreenInput = styled.input`
  width: calc(100%-30px);
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 15px;
  border: none;
  outline: none;
  background-color: ${Colors.main1};
  :active {
    outline: 2px solid ${Colors.main3};
  }
`;
export const Topic = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;
export const JoinBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 15px 30px;
  border: none;
  outline: none;
  background-color: #373737;
  color: #fff;
  margin-top: 20px;
`;
export const Alert = styled.div`
  color: #dc8d98;
`;

/* CSS */
