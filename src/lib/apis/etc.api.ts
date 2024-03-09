import { instanceAxios } from "./instance";

export const requestCode = async ({ phone }: RequestCodeDto) => {
  const { data } = await instanceAxios.post(``, { phone });
  return data;
};

export const verifyCode = async ({ phone, code }: VerifyCodeDto) => {
  const { data } = await instanceAxios.post(``, { phone, code });
  return data;
};
