export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { search } = body;
  if (!search) {
    return [];
  }

  const res = await $fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=10&q=${search}&key=${process.env.YOUTUBE_API_KEY}`,
    {
      Authorization: `Bearer ${process.env.YOUTUBE_API_KEY}`,
      Accept: "application/json",
    }
  );

  return res.items.filter((item) => item.id.videoId);
});
