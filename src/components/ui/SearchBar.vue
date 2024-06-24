<script setup>
import { ref, watch } from 'vue'
import ButtonIcon from './ButtonIcon.vue'
import BaseIcon from '../base/BaseIcon.vue'

const emits = defineEmits(['toggleMenu', 'searchChat'])
const isToggledMenu = ref(false)
const toggleMenu = () => {
  emits('toggleMenu')
  isToggledMenu.value = !isToggledMenu.value
}

const inputValue = ref('')
let searchDebounce = null
watch(inputValue, () => {
  if (searchDebounce) clearTimeout(searchDebounce) 
  searchDebounce = setTimeout(() => {
    emits('searchChat', inputValue.value)
  }, 800)
})
</script>

<template>
  <div class="search-bar">
    <ButtonIcon @click="toggleMenu" title="menu toggle">
      <BaseIcon name="menu" color="#707991" />
    </ButtonIcon>
    <div class="search-bar__input-wrapper" v-show="!isToggledMenu">
      <BaseIcon name="search" color="#707991" aria-hidden="true" />
      <input
        v-model="inputValue"
        class="search-bar__input"
        type="text"
        placeholder="Поиск"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  border-right: 1px solid #D9DCE0;
  min-width: 80px;
  max-width: 364px;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: $white;
  padding: 8px 16px;

  &__input-wrapper {
    border-radius: 22px;
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: $light-grey;
    padding: 8px 16px;
  }

  &__input {
    border: none;
    background-color: inherit;
    padding: 4px;
  }

  &__input,
  &__input::placeholder {
    font-size: 16px;
    line-height: 20px;
    color: $navy-grey;
  }
}
</style>