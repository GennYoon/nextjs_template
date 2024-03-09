import { HttpResponse, http } from "msw";
import { phoneVerifyData } from "@/lib/mocks/data";

export const phoneRequestCode = http.post<{}, RequestCodeDto>(
  `${process.env.REACT_APP_API_URL}/request-code`,
  async ({ request }) => {
    const { phone } = await request.json();

    const code = (Math.floor(Math.random() * 899999) + 10000).toString();
    phoneVerifyData.set(phone, code);
    return HttpResponse.json({ code }, { status: 200 });
  },
);
