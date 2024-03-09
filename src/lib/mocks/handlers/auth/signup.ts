import { getLastId } from "@/lib/utils";
import { HttpResponse, http } from "msw";
import { customersData } from "../../data";

export const signup = http.post<{}, SignupAuthDto>(`${process.env.NEXT_PUBLIC_API_URL}/auth`, async ({ request }) => {
  const createData = await request.json();
  const id = getLastId(customersData);

  const createCustomer: Customer = Object.assign(createData, {
    id,
    lastConnectedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  });

  customersData.set(id, createCustomer);

  return HttpResponse.json(createCustomer, { status: 200 });
});
