import { HttpResponse, http } from "msw";
import { phoneVerifyData } from "@/lib/mocks/data";

export const phoneVerifyCode = http.post<{}, VerifyCodeDto>(
  `${process.env.NEXT_PUBLIC_API_URL}/verify-code`,
  async ({ request }) => {
    const { phone, code } = await request.json();
    const _code = phoneVerifyData.get(phone);
    if (code === _code) {
      return HttpResponse.json(true, { status: 200 });
    } else {
      return new HttpResponse(null, { status: 400 });
    }
  },
);
