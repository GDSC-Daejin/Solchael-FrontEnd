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
