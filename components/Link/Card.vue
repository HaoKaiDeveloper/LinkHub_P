<template>
  <div
    class="min-w-[200px] w-full max-w-[300px] max-h-[220px] flex justify-between gap-2 border-2 rounded-lg px-3 py-5 relative cursor-pointer hover:bg-stone-100"
    @click="handleLinkClick(link.url)"
  >
    <div>
      <p class="text-base font-semibold text-stone-700">
        {{
          link.title.length > 30
            ? `${link.title.substring(0, 30)}...`
            : link.title
        }}
      </p>
      <p class="text-sm text-stone-500">
        {{
          link.description.length > 20
            ? `${link.description.substring(0, 30)}...`
            : link.description
        }}
      </p>
    </div>
    <img
      v-if="link.image"
      :src="link.image"
      alt=""
      class="w-[65px] h-[65px] object-cover"
    />
    <img
      v-imgload="{ fallback: '/img/back.jpg' }"
      :src="link.icon || '/img/back.jpg'"
      alt=""
      class="w-[15px] h-[15px] absolute top-1 right-1"
    />
    <button
      class="absolute bottom-0 right-0 text-2xl px-3 py-2 bg-white rounded-md"
      @click.stop="toggleShowBtns(link)"
      v-if="editBns"
    >
      <Icon name="material-symbols:edit-note" class="text-2xl text-stone-500" />
    </button>
    <div
      class="absolute bottom-[-120px] right-[-30px] flex flex-col gap-1 z-10 bg-white shadow-md btns"
      :class="editLinkVal._id === link._id ? 'flex' : 'hidden'"
      v-if="editBns"
    >
      <button
        class="hover:bg-stone-50 w-full block p-2 text-left"
        @click.stop="showEditPopup(link)"
      >
        Edit
      </button>
      <button
        class="hover:bg-stone-50 w-full block p-2"
        @click.stop="updateLink(link)"
      >
        Update
      </button>
      <button
        class="hover:bg-stone-50 w-full block p-2"
        @click.stop="deleteLink(link._id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: Object,
  editLinkVal: Object,
  deleteLink: Function,
  updateLink: Function,
  editBns: Boolean,
});
const emit = defineEmits(["toggleShowBtns", "showEditPopup"]);

const showEditBtns = ref(false);

function handleLinkClick(url) {
  if (!url) return;
  window.open(url, "_blank");
}

function toggleShowBtns(value) {
  emit("toggleShowBtns", value);
}

function showEditPopup(value) {
  emit("showEditPopup", value);
}
</script>

<style scoped>
.btns {
  animation: show 0.3s ease;
}

@keyframes show {
  0% {
    opacity: 0.5;
    bottom: -130px;
  }
  100% {
    opacity: 1;

    bottom: -120px;
  }
}
</style>
