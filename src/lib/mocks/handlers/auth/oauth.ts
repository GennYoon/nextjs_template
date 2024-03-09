import { generateAccessToken, generateRefreshToken } from "@/lib/utils";
import { HttpResponse, http } from "msw";
import { customersData } from "../../data";

export const oauth = http.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/oauth`, () => {
  const customer = customersData.get(1);
  if (!customer) return new HttpResponse(null, { status: 404 });

  const accessToken = generateAccessToken(customer.id);
  const refreshToken = generateRefreshToken(customer.id);

  return HttpResponse.json({ accessToken, refreshToken }, { status: 200 });
});
