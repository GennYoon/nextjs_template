import { HttpResponse, http } from "msw";
import { customersData } from "../../data";
import { verifyAccessToken } from "@/lib/utils";

export const withdraw = http.delete(`${process.env.NEXT_PUBLIC_API_URL}/auth/withrow`, ({ request }) => {
  const token = request.headers.get("Authorization");
  if (!token) {
    return new HttpResponse(null, { status: 401 });
  }

  const { id } = verifyAccessToken(token);
  const customer = customersData.get(id);

  if (!customer) return new HttpResponse(null, { status: 404 });

  customersData.delete(id);

  return HttpResponse.json({ success: true }, { status: 200 });
});
