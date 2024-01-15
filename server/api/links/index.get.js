import Link from "@/server/models/linkModel";

export default defineEventHandler(async (event) => {
  const { userId } = event.context;

  const Links = await Link.find({ userId });

  return Links;
});
