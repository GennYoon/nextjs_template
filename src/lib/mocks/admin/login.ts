import { HttpResponse, http } from "msw";

interface LoginReq {
  email: string;
  password: string;
}

export default http.post<{}, LoginReq>(`${process.env.NEXT_PUBLIC_API_URL}/login`, async ({ request }) => {
  const { email, password } = await request.json();

  return HttpResponse.json();
});
