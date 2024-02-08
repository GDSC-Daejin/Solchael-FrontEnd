import { instance } from './common';

export const postLogin = async ({ email, password }) => await instance.post('/api/v1/login', { email, password });

export const postLogout = async () => await instance.post('/api/v1/logout');

export const postJoin = async ({ nickName, email, password }) =>
  await instance.post('/api/v1/join', { nickName, email, password });
