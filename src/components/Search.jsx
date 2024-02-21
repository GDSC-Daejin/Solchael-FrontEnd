import styled from 'styled-components';
import { Colors } from '../styles/Colors';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const GreenContainer = styled.div`
  background-color: ${Colors.main2};
  border-radius: 0 0 25px 25px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  input {
    width: 50vw;
    height: 50px;
    padding: 10px 30px;
    font-size: 2rem;
    outline: 3px solid ${Colors.main3};
    border: none;
    border-radius: 30px;
    @media screen and (max-width: 460px) {
      height: 35px;
      margin-left: 35px;
      padding: 10px 60px 10px 20px;
      font-size: 20px;
    }
  }
  a {
    color: #000;
    .search_icon {
      position: relative;
      left: -50px;
      top: 2px;
      padding: 22px;
      background-color: ${Colors.main3};
      border-radius: 0px 30px 30px 0px;
      outline: 3px solid ${Colors.main3};
      cursor: pointer;
      @media screen and (max-width: 460px) {
        padding: 13px;
      }
    }
  }
`;

const Search = ({ placeholder }) => {
  const [pillName, setPillName] = useState('');

  const onHandleChange = (e) => {
    setPillName(e.target.value);
  };

  return (
    <GreenContainer>
      <SearchContainer>
        <input type="text" placeholder={placeholder} value={pillName} onChange={onHandleChange} />
        <Link to={'/detailsearch'} state={{ name: pillName }}>
          <FaSearch className="search_icon" size={26} />
        </Link>
      </SearchContainer>
    </GreenContainer>
  );
};

export default Search;
