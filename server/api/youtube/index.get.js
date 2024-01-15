import YoutubeLink from "@/server/models/youtubeLinkModel";

export default defineEventHandler(async (event) => {
  const { userId } = event.context;

  const links = await YoutubeLink.find({ userId }).select("-userId");

  return links;
});
