import mongoose from "mongoose";

const youtubeLinkSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    videoId: {
      type: String,
    },
    channelTitle: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    thumbnails: {
      type: {
        url: {
          type: String,
        },
        width: {
          type: Number,
        },
        height: {
          type: Number,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("YoutubeLink", youtubeLinkSchema);
