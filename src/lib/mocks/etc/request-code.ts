import { HttpResponse, http } from "msw";
import { phoneVerifyData } from "../data";

interface RequestCodeReq {
  phone: string;
}

export const phoneRequestCode = http.post<{}, RequestCodeReq>(
  `${process.env.REACT_APP_API_URL}/request-code`,
  async ({ request }) => {
    const { phone } = await request.json();

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    phoneVerifyData.set(phone, code);
    return HttpResponse.json({ code }, { status: 200 });
  },
);
