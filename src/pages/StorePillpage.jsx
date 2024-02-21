import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import notFoundImg from "../imgs/notfoundImg.jpeg";

const DetailSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
`

const SearchBox = styled.div`
  padding: 20px;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  img {
    width: 250px;
    object-fit: cover;
  }
  button {
    width: 220px;
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 10px;
  }
  h1 {
    margin: 20px 0px;
    font-size: 20px;
  }
`

const StorePillpage = () => {

  const {name} = useParams();
  const navigate = useNavigate();

  const findDiseasePill = async () => {
    const response = await axios.get(`http://35.216.98.123:8080/api/v1/recommend?symptom=${name}`);
    return response.data;
  }

  const {data, isError, isLoading} = useQuery({
    queryKey: ["disease"],
    queryFn: findDiseasePill
  })

  const handleOnClick = (id) => {
    navigate(`/detail/${id}`)
  }
  
  if(isError) return <p>에러가 발생했습니다..</p>
  if(isLoading) return <p>로딩중입니다..</p>

  return (
    <>
    <Navbar/>
    <DetailSearchContainer>
      {data?.map((item, index) => (
        <SearchBox key={index}>
          <img src={item.itemImage ?? notFoundImg} alt="#" />
          <h1>{item.name}</h1>
          <button onClick={() => handleOnClick(item.id)}>자세한 내용</button>
        </SearchBox>
      ))}
    </DetailSearchContainer>
    </>
  )
}

export default StorePillpage