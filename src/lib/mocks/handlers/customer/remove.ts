import { HttpResponse, http } from "msw";
import { customersData } from "../../data";

interface RemoveCustomerParams {
  id: string;
}

export const remove = http.delete<RemoveCustomerParams>(
  `${process.env.NEXT_PUBLIC_API_URL}/customer/:id`,
  async ({ params }) => {
    const id = parseInt(params.id);
    const customer = customersData.get(id);

    if (!customer) return new HttpResponse(null, { status: 404 });
    customersData.delete(id);

    return HttpResponse.json({ success: true }, { status: 200 });
  },
);
