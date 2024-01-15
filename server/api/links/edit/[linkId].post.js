import Link from "@/server/models/linkModel";

export default defineEventHandler(async (event) => {
  const { linkId } = event.context.params;
  const body = await readBody(event);
  const { category, title, description } = body;

  const link = await Link.findOneAndUpdate(
    { _id: linkId },
    { category, title, description },
    {
      new: true,
    }
  );

  return link;
});
