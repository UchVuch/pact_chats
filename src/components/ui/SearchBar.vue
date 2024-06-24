<script setup>
import { ref, watch, onMounted } from 'vue'
import ButtonIcon from './ButtonIcon.vue'
import BaseIcon from '../base/BaseIcon.vue'

const emits = defineEmits(['toggleMenu', 'searchChat'])
const isToggledMenu = ref(false)
const toggleMenu = () => {
  emits('toggleMenu')
  localStorage.setItem('isToggledMenu', !isToggledMenu.value)
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

onMounted(() => {
  console.log('mounted search')
  console.log(JSON.parse(localStorage.getItem('isToggledMenu')))
  if (JSON.parse(localStorage.getItem('isToggledMenu')) !== null) {
    isToggledMenu.value = JSON.parse(localStorage.getItem('isToggledMenu'))
  }
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
  min-width: 80px;
  max-width: 364px;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
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