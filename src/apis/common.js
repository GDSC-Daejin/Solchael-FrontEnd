import axios from 'axios';

// 헤더에 세션 아이디를 포함한 Axios 인스턴스 생성
export const instance = axios.create({
  baseURL: 'http://35.216.98.123:8080',
  timeout: 60000,
});
