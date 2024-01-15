import Link from "@/server/models/linkModel";

export default defineEventHandler(async (event) => {
  const { linkId } = event.context.params;
  const { userId } = event.context;

  await Link.deleteOne({ _id: linkId, userId });

  return {
    stetus: 200,
    data: {
      message: "success",
    },
  };
});
