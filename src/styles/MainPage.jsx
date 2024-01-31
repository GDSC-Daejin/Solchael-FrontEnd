import styled from 'styled-components';
import { Colors } from './Colors';

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  width: 65%;
  max-width: 750px;
  height: 40px;
  border: 3px ${Colors.main3};
  border-radius: 40px;
  padding: 6px 20px;
  font-size: 20px;
`;

export const GreenContainer = styled.div`
  background-color: ${Colors.main2};
  border-radius: 0 0 25px 25px;
  box-shadow: 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 32vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  gap: 50px;
`;

export const ContentBox = styled.div`
  margin-top: 120px;
  width: 16vw;
  height: 22vw;
  max-width: 300px;
  max-height: 450px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 30px;
`;
