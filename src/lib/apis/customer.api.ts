import { instanceAxios } from "./instance";

export const findCustomerApi = async () => {
  const { data } = await instanceAxios.get(`/customer`);
  return data;
};

export const findOneCustomerApi = async (id: string) => {
  const { data } = await instanceAxios.get(`/customer/${id}`);
  return data;
};

export const updateCustomerApi = async ({ id, ...body }: any) => {
  const { data } = await instanceAxios.patch(`/customer/${id}`, body);
  return data;
};

export const deleteCustomerApi = async (id: string) => {
  const { data } = await instanceAxios.delete(`/customer/${id}`);
  return data;
};
