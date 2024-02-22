import { instance } from './common';

export const postPill = async (medicineId, type) =>
  await instance.post(`/api/v1/mypage/${medicineId}`, { type, startTime: '2024-02-21T09:59:21.055Z' });

export const postPtpPill = async (medicineId) =>
  await instance.post(`/api/v1/mypage/ptp/${medicineId}`, {
    expiration: '2024-02-28T06:32:34.547Z',
  });

export const getMypills = async () => await instance.get('/api/v1/mypage/medicines');

export const getPillSearch = async (name) => await instance.get(`api/v1/search?name=${name}`);
