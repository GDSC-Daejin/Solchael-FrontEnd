import { instance } from './common';

export const postLogin = async ({ email, password }) => await instance.post('/api/v1/login', { email, password });

export const postLogout = async () => await instance.post('/api/v1/logout');

export const postJoin = async ({ nickName, email, password }) =>
  await instance.post('/api/v1/join', { nickName, email, password });

export const postUserExist = async (nickName) => await instance.post(`/api/v1/user-nickName/exists`, { nickName });

export const postEmailExist = async (email) => await instance.post(`/api/v1/user-email/exists`, { email });
