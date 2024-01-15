export default defineEventHandler((event) => {
  const { token } = parseCookies(event);
  console.log(token);

  return token;
});
