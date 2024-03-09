import { deleteCookie } from "cookies-next";
import { HttpResponse, http } from "msw";
import { customersData } from "../../data";
import { verifyAccessToken } from "@/lib/utils";

export const signout = http.delete(`${process.env.NEXT_PUBLIC_API_URL}/auth`, async ({ request }) => {
  const token = request.headers.get("Authorization");
  if (!token) {
    return new HttpResponse(null, { status: 401 });
  }

  const { id } = verifyAccessToken(token);
  const customer = customersData.get(id);

  if (!customer) return new HttpResponse(null, { status: 404 });

  deleteCookie("access_token");

  return HttpResponse.json({ success: true }, { status: 200 });
});
