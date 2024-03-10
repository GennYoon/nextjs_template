import { instanceAxios } from "./instance";

export const signinAuthApi = async (body: SigninAuthDto) => {
  const { data } = await instanceAxios.post(`/auth/customer/signin`, body);
  return data;
};

export const oauthAuthApi = async () => {
  const { data } = await instanceAxios.get(`/auth/customer/oauth`);
  return data;
};

export const signupAuthApi = async (body: SignupAuthDto) => {
  const { data } = await instanceAxios.post(`/auth/customer/signup`, body);
  return data;
};

export const updateAuthApi = async (body: UpdateAuthDto) => {
  const { data } = await instanceAxios.patch(`/auth/customer/update`, body);
  return data;
};

export const signoutAuthApi = async () => {
  const { data } = await instanceAxios.delete(`/auth/customer/signout`);
  return data;
};

export const withdrawAuthApi = async () => {
  const { data } = await instanceAxios.delete(`/auth/customer/withdraw`);
  return data;
};
