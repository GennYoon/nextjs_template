import { HttpResponse, http } from "msw";
import { customersData } from "../../data";

export const findCustomer = http.get(`${process.env.NEXT_PUBLIC_API_URL}/customer`, async ({ request }) => {
  const searchParams = new URLSearchParams(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const size = parseInt(searchParams.get("size") || "10");
  const skip = (page - 1) * size;

  const total = customersData.size;

  const data = Array.from(customersData.values()).filter((customer, index) => {
    if (customer.deletedAt !== null && index >= skip && index < skip + size) return customer;
  });

  return HttpResponse.json({ page, size, total, data }, { status: 200 });
});
