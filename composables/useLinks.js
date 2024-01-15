export default function () {
  const linkStore = useLinksStore();
  const userStore = useUserStore();

  async function getLinks() {
    const { data, error } = await useFetch("/api/links");
    if (data.value) {
      linkStore.setAllLinks(data.value);
    }
    userStore.setShowReLoginPop(data.value);
    return { data, error };
  }

  async function editLink(editLinkVal) {
    try {
      const link = await $fetch(`/api/links/edit/${editLinkVal._id}`, {
        method: "POST",
        body: editLinkVal,
      });
      const index = linkStore.allLinks.findIndex(
        (item) => item._id === link._id
      );
      linkStore.editLinks({ Fn: "splice", index, link });
      linkStore.activeCategory = "全部";
    } catch (err) {
      userStore.setShowReLoginPop(null);
    }
  }

  async function deleteLink(id) {
    try {
      await $fetch(`/api/links/delete/${id}`, {
        method: "DELETE",
      });

      const index = linkStore.allLinks.findIndex((item) => item._id === id);
      linkStore.editLinks({ Fn: "splice", index });
      linkStore.activeCategory = "全部";
    } catch (err) {
      userStore.setShowReLoginPop(null);
    }
  }

  async function updateLink(link) {
    try {
      const newLink = await $fetch(`/api/links/update/${link._id}`, {
        method: "POST",
        body: link,
      });
      const index = linkStore.allLinks.findIndex(
        (item) => item._id === link._id
      );
      linkStore.editLinks({ Fn: "splice", index, link: newLink });
      linkStore.activeCategory = "全部";
    } catch (err) {
      userStore.setShowReLoginPop(null);
    }
  }

  async function createNewLink(linkInput) {
    if (
      !linkInput ||
      !linkInput.startsWith("https") ||
      !linkInput.startsWith("http")
    )
      return;
    try {
      const link = await $fetch("/api/links/create", {
        method: "POST",
        body: {
          url: linkInput,
        },
      });
      linkStore.editLinks({ Fn: "push", link });
      linkStore.activeCategory = "全部";
    } catch (err) {
      userStore.setShowReLoginPop(null);
    }
  }

  return {
    getLinks,
    editLink,
    updateLink,
    deleteLink,
    createNewLink,
  };
}
