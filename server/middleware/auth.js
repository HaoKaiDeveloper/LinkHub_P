import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { pathname } = getRequestURL(event);
  const token = getCookie(event, "token");
  const user = getCookie(event, "user");

  if (pathname.includes("/api") && !pathname.includes("/auth")) {
    const verifyObj = jwt.verify(token, process.env.JWT_SECRET);
    if (!user || !verifyObj) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid Credentials",
      });
    }
    event.context.userId = verifyObj.id;
  }
});
