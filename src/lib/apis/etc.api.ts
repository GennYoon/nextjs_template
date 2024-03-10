import { instanceAxios } from "./instance";

export const requestCodeApi = async ({ phone }: RequestCodeDto) => {
  const { data } = await instanceAxios.post(`request-code`, { phone });
  return data;
};

export const verifyCodeApi = async (body: VerifyCodeDto) => {
  const { data } = await instanceAxios.post(`verify-code`, body);
  return data;
};
