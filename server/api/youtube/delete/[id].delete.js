import Youtube from "@/server/models/youtubeLinkModel";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const { userId } = event.context;

  await Youtube.deleteOne({ _id: id, userId });

  return {
    stetus: 200,
    data: {
      message: "success",
    },
  };
});
