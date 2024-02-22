import { instance } from './common';

const username = sessionStorage.getItem("nickname");

// 기존에 있었던 부분 을 react-query 로 변경해서 instance 로 변경하고 싶으시면 axios 만 바꾸시면 됩니다!.

export const createPillMutation = useMutation((data) => 
axios.post(`http://35.216.98.123:8080/api/v1/mypage/${medicineId}?name=${username}`, data),{
    mutationKey: 'createPill',
    onSuccess: () => {console.log('성공적으로 등록햇습니다.');},
    onError: (error) => {console.error('알수없는 오류가...!!?', error);}
  }
);

export const createPtpPillMutation = useMutation((data) => 
axios.post(`http://35.216.98.123:8080/api/v1/mypage/ptp/${medicineId}?name=${username}`, data),{
    mutationKey: 'createPtpPill',
    onSuccess: () => {console.log('성공적으로 등록햇습니다.');},
    onError: (error) => {console.error('알수없는 오류가...!!?', error);}
  }
);

export const getMypills = async () => await instance.get('/api/v1/mypage/medicines');

export const getPillSearch = async (name) => await instance.get(`api/v1/search?name=${name}`);
