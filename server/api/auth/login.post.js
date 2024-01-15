import { OAuth2Client } from "google-auth-library";
import User from "@/server/models/userModel";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const oauth2Client = new OAuth2Client();

  const ticket = await oauth2Client.verifyIdToken({
    idToken: body.credential,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid token",
    });
  }

  let user;
  user = await User.findOne({ email: payload.email });

  if (!user) {
    user = await User.create({
      name: payload.name,
      avatar: payload.picture,
      email: payload.email,
    });
  }
  const maxAge = 60 * 60 * 24;
  const currentData = new Date();
  const expirationDate = new Date(currentData.getTime() + 1000 * 60 * 60 * 24);

  const jwtToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: maxAge }
  );

  setCookie(event, "token", jwtToken, {
    httpOnly: true,
    maxAge: maxAge,
    expires: expirationDate,
  });

  return {
    name: user.name,
    avatar: user.avatar,
  };
});
