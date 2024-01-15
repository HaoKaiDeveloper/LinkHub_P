<template>
  <label :for="labelTitle" class="w-full">
    {{ labelTitle }}
    <input
      :id="labelTitle"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="w-full outline-none border-b border-black"
    />
  </label>
</template>

<script setup>
defineProps({
  labelTitle: String,
  type: String,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style></style>
