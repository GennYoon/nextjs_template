import { HttpResponse, http } from "msw";
import { customersData } from "../../data";
import { generateAccessToken, generateRefreshToken } from "@/lib/utils";

export const signin = http.post<{}, SigninAuthDto>(
  `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
  async ({ request }) => {
    const { email, password } = await request.json();

    const searchedCustomer = Array.from(customersData.values()).reduce<Customer | null>((acc, curr) => {
      if (curr.email === email) acc = curr;
      return acc;
    }, null);

    if (!searchedCustomer) return new HttpResponse(null, { status: 404 });

    if (searchedCustomer.password !== password) return new HttpResponse(null, { status: 401 });

    const accessToken = generateAccessToken(searchedCustomer.id);
    const refreshToken = generateRefreshToken(searchedCustomer.id);

    return HttpResponse.json({ accessToken, refreshToken }, { status: 200 });
  },
);
