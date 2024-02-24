import { useMutation, useQuery } from 'react-query';
import { instance } from './common';
import axios from 'axios'; // Make sure axios is imported

const username = sessionStorage.getItem('nickname');

export const useCreatePillMutation = (medicineId) => {
  return useMutation(
    (data) => axios.post(`http://35.216.98.123:8080/api/v1/mypage/${medicineId}?name=${username}`, data),
    {
      mutationKey: 'createPill',
      onSuccess: () => {
        console.log('성공적으로 등록햇습니다.');
      },
      onError: (error) => {
        console.error('알수없는 오류가...!!?', error);
      },
    },
  );
};

export const useCreatePtpPillMutation = (medicineId) => {
  return useMutation(
    (data) => axios.post(`http://35.216.98.123:8080/api/v1/mypage/ptp/${medicineId}?name=${username}`, data),
    {
      mutationKey: 'createPtpPill',
      onSuccess: () => {
        console.log('성공적으로 등록햇습니다.');
      },
      onError: (error) => {
        console.error('알수없는 오류가...!!?', error);
      },
    },
  );
};

export const getPillSearch = async (name) => await instance.get(`api/v1/search?name=${name}`);

export const useGetMyPills = (name) => {
  return useQuery('myPills', async () => {
    const response = await axios.get(
      `http://35.216.98.123:8080/api/v1/mypage/medicines?name=${encodeURIComponent(name)}`,
      {
        headers: {
          accept: '*/*',
        },
      },
    );
    return response.data;
  });
};

export const deleteMyPills = async (id) => await instance.delete(`api/vq/mypage/medicines/${id}`);
