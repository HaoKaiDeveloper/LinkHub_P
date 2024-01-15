export default function () {
  const youtubeStore = useYoutubeStore();
  const userStore = useUserStore();

  async function getYoutubeLinks() {
    const { data, error } = await useFetch("/api/youtube");

    if (data.value) {
      youtubeStore.$patch({
        links: data.value,
        activeLink: data.value[0],
      });
    }

    userStore.setShowReLoginPop(data.value);

    return { data, error };
  }

  async function searchYotubeVideo(searchVal) {
    return await $fetch("/api/youtube/search", {
      method: "POST",
      body: { search: searchVal },
    });
  }

  async function createYoutubeLink(value) {
    const { id, snippet } = value;
    const semeItem = youtubeStore.links.find(
      (item) => item.videoId === id.videoId
    );
    if (semeItem) {
      return;
    }
    const { data, error } = await useFetch("/api/youtube/create", {
      method: "POST",
      body: {
        userId: "",
        videoId: id.videoId,
        channelTitle: snippet.channelTitle,
        title: snippet.title,
        description: snippet.description,
        thumbnails: snippet.thumbnails.high,
      },
    });

    if (data.value) {
      youtubeStore.links.push(data.value);
    }

    if (youtubeStore.links.length <= 1) {
      youtubeStore.activeLink = youtubeStore.links.value[0];
    }
    userStore.setShowReLoginPop(data.value);
  }

  async function deleteYoutubeLink(id) {
    const { data, error } = await useFetch(`/api/youtube/delete/${id}`, {
      method: "DELETE",
    });

    if (data.value) {
      const index = youtubeStore.links.findIndex((item) => item._id === id);
      youtubeStore.links.splice(index, 1);
      youtubeStore.activeLink = youtubeStore.links[0];
    }
    userStore.setShowReLoginPop(data.value);
  }

  return {
    getYoutubeLinks,
    searchYotubeVideo,
    createYoutubeLink,
    deleteYoutubeLink,
  };
}
