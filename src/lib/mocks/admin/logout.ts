import { deleteCookie } from "cookies-next";
import { http, HttpResponse } from "msw";

export default http.delete(`${process.env.NEXT_PUBLIC_API_URL}/logout`, () => {
  deleteCookie("access_token");
  deleteCookie("refresh_token");
  return HttpResponse.json(null, { status: 200 });
});
