import { useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useQuery } from "react-query";

const { kakao } = window;

const CollectionBoxMapPage = () => {

  const fetchMapData = async () => {
    const response = await axios.get("http://35.216.98.123:8080/api/v1/drugbox");
    return response.data
  }

  const { data, isLoding, isError} = useQuery({
    queryKey: ["drugBoxMap"],
    queryFn: fetchMapData
  })

  useEffect(() => {

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5157276361757, 127.131063164753),
      level:3
    };
    const map = new kakao.maps.Map(container, options);

    for (let i = 0; i < data?.length; i++) {

      const latlng = new kakao.maps.LatLng(data[i].latitude, data[i].longitude);
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35); 
      
      // 마커 이미지를 생성합니다    
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: latlng, // 마커를 표시할 위치
          title : data[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
      });

      const content = `
        <div style="padding: 5px 10px; width:300px; ">
          <h1 style="text-align: center; font-size: 20px; color: #2f2f2f;">${data[i].name}</h1>
          <p style="text-align: center;">${data[i].address}</p>
        </div>
      `;

      const infowindow = new kakao.maps.InfoWindow({
        content: content
      });

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }

  },[data])

  function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
  function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
  }

  if(isLoding) return <p>로딩중입니다..</p>
  if(isError) return <p>알수 없는 오류가 생겼습니다.</p>

  return (
    <div>
      <Navbar/>
      <div id="map" style={{width: '100%', height: '800px'}}></div>
    </div>
  )
}

export default CollectionBoxMapPage