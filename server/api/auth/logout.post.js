export default defineEventHandler(async (event) => {
  deleteCookie(event, "token", {
    httpOnly: true,
  });
  deleteCookie(event, "user", {
    httpOnly: true,
  });

  return {
    stetus: 200,
    data: {
      message: "success",
    },
  };
});
