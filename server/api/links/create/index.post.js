import Link from "@/server/models/linkModel";
import * as cheerio from "cheerio";

const metaTagsName = ["description", "title", "image"];
const metaTagsProperties = ["og:description", "og:title", "og:image"];

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event);
  const { userId } = event.context;
  const domain = new URL(url);

  if (!domain) {
    return;
  }

  const fetchHtml = await fetch(url);
  const html = await fetchHtml.text();
  const $ = cheerio.load(html);
  const result = {
    description: "",
    image: "",
    title: "",
    category: "",
    icon: "",
    url,
    userId,
  };

  let icon =
    $('link[rel="icon"]').attr("href") ||
    $('link[rel="shortcut icon"]').attr("href");

  if (icon) {
    if (icon.startsWith("https://")) {
      result.icon = icon;
    } else {
      result.icon = domain.origin + icon;
    }
  }

  for (let i = 0; i < metaTagsName.length; i++) {
    const content =
      $(`meta[name=${metaTagsName[i]}]`).attr("content") ||
      $(`meta[property=${metaTagsProperties[i]}]`).attr("content");
    if (content) {
      result[metaTagsName[i]] = content;
    }
  }
  const newLink = await Link.create(result);
  return newLink;
});
