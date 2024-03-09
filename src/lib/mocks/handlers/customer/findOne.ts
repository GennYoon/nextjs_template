import { HttpResponse, http } from "msw";
import { customersData } from "../../data";

interface FindOneCustomerParams {
  id: string;
}

export const findOneCustomer = http.get<FindOneCustomerParams>(
  `${process.env.NEXT_PUBLIC_API_URL}/customer/:id`,
  async ({ params }) => {
    const id = parseInt(params.id);

    const customer = customersData.get(id);
    if (!customer) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json(customer, { status: 200 });
  },
);
