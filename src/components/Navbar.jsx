import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  .back-icons {
    cursor: pointer;
    transition: all .7s;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const Navbar = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1)
  }

  return (
    <NavbarContainer>
      <IoMdArrowRoundBack className="back-icons" size={40} onClick={handleOnClick}/>
      <h1>알약 공장</h1>
    </NavbarContainer>
  )
}

export default Navbar