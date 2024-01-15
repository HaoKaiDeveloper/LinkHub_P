import YoutubeLink from "@/server/models/youtubeLinkModel";

export default defineEventHandler(async (event) => {
  const { userId } = event.context;
  const body = await readBody(event);

  const checkMyYoutube = await YoutubeLink.find({
    userId,
    videoId: body.videoId,
  });

  if (checkMyYoutube.length > 0) {
    return null;
  }

  const youtube = await YoutubeLink.create({ ...body, userId: userId });

  return youtube;
});
