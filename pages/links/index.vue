<template>
  <NuxtLayout name="dashboard" @click="toggleShowBtns({})">
    <section class="flex flex-col gap-3">
      <!-- addInput start -->
      <div class="flex justify-center">
        <div
          class="min-w-[200px] w-[40%] border-2 relative overflow-hidden rounded-full active:border-black"
        >
          <input
            type="text"
            class="w-full rounded-xl text-base text-slate-600 px-3 py-2 outline-none"
            v-model="linkInput"
            @keydown.enter="createNewLink"
          />
          <button
            class="flex justify-center p-2 h-full absolute top-0 right-0 bg-stone-100"
            @click="handleCreateNewLink"
          >
            新增
          </button>
        </div>
      </div>
      <!-- add Input end-->

      <h1 class="text-2xl font-bold">Links</h1>

      <!-- categoryBtns start-->
      <div class="flex flex-wrap gap-3">
        <LinkCategoryBtn v-for="item in categories" :key="item" :item="item" />
      </div>
      <!-- categoryBtns end -->

      <!-- links start -->
      <div class="flex gap-4 flex-wrap p-2 mx-auto">
        <LinkCard
          v-for="link in showLinks"
          :key="link._id"
          :link="link"
          :editBns="true"
          :editLinkVal="editLinkVal"
          :deleteLink="deleteLink"
          :updateLink="handleUpdateLink"
          @toggleShowBtns="toggleShowBtns"
          @showEditPopup="showEditPopup"
        />
      </div>
      <!-- links end -->
    </section>
    <!-- editLink start -->
    <div class="w-full h-full fixed top-0 left-0 z-20" v-if="showEditPop">
      <div
        class="w-full h-full absolute top-0 left-0 bg-stone-900/50"
        @click="showEditPopup"
      ></div>
      <form
        class="min-w-[200px] w-full max-w-[400px] bg-white p-4 absolute top-[10%] left-1/2 translate-x-[-50%] z-10 flex flex-col gap-2 rounded-lg"
        @submit.prevent="handleEditLink(editLinkVal)"
      >
        <h1 class="text-xl">Edit</h1>
        <LinkEditInput
          labelTitle="Title"
          type="text"
          v-model="editLinkVal.title"
        />
        <LinkEditInput
          labelTitle="Description"
          type="text"
          v-model="editLinkVal.description"
        />
        <LinkEditInput
          labelTitle="Category"
          type="text"
          v-model="editLinkVal.category"
        />
        <button
          type="submit"
          class="block w-fit mx-auto px-2 py-1 rounded-lg bg-stone-100 hover:bg-stone-200"
        >
          edit!
        </button>
      </form>
    </div>
    <!-- editLink end -->
  </NuxtLayout>
</template>

<script setup>
const { getLinks, editLink, deleteLink, updateLink, createNewLink } =
  useLinks();
await getLinks();

const linkStore = useLinksStore();
const { categories, showLinks } = storeToRefs(linkStore);

const linkInput = ref("");
const editLinkVal = ref({});
const showEditPop = ref(false);

async function handleEditLink(val) {
  await editLink(val);
  showEditPopup({});
}

async function handleCreateNewLink() {
  await createNewLink(linkInput.value);
  linkInput.value = "";
}

async function handleUpdateLink(val) {
  await updateLink(val);
  toggleShowBtns({});
}

function toggleShowBtns(val) {
  if (showEditPop.value) return;
  if (editLinkVal.value._id === val._id) {
    editLinkVal.value = {};
  } else {
    editLinkVal.value = val;
  }
}

function showEditPopup(val) {
  if (!val._id) {
    showEditPop.value = false;
    editLinkVal.value = {};
    return;
  }
  showEditPop.value = true;
  editLinkVal.value = { ...val };
}
</script>

<style></style>
