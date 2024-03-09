import { HttpResponse, http } from "msw";
import { customersData } from "../../data";
import { verifyAccessToken } from "@/lib/utils";

export const update = http.patch<{}, UpdateAuthDto>(`${process.env.NEXT_PUBLIC_API_URL}/auth`, async ({ request }) => {
  const updateData = await request.json();
  const token = request.headers.get("Authorization");
  if (!token) {
    return new HttpResponse(null, { status: 401 });
  }

  const { id } = verifyAccessToken(token);
  const customer = customersData.get(id);

  if (!customer) return new HttpResponse(null, { status: 404 });

  const updateCustomer = Object.assign(customer, updateData);
  customersData.set(id, updateCustomer);

  return HttpResponse.json(updateCustomer, { status: 200 });
});
