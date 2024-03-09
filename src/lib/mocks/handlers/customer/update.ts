import { HttpResponse, http } from "msw";
import { customersData } from "../../data";

interface UpdateCustomerParams {
  id: string;
}

export const updateCustomer = http.patch<UpdateCustomerParams, UpdateCustomerDto>(
  `${process.env.NEXT_PUBLIC_API_URL}/customer/:id`,
  async ({ params, request }) => {
    const updateData = await request.json();
    const id = parseInt(params.id);

    const customer = customersData.get(id);
    if (!customer) return new HttpResponse(null, { status: 404 });

    const updateCustomer: Customer = Object.assign(customer, updateData);

    customersData.set(id, updateCustomer);
    return HttpResponse.json(updateCustomer, { status: 200 });
  },
);
