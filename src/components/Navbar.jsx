import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../styles/Colors';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  background-color: ${Colors.main2};
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 999;
  .back-icons {
    cursor: pointer;
    transition: all 0.7s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <NavbarContainer>
      <IoMdArrowRoundBack className="back-icons" size={40} onClick={handleOnClick} />
      <h1 onClick={() => navigate('/')}>알약 공장</h1>
    </NavbarContainer>
  );
};

export default Navbar;
