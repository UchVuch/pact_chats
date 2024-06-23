<script setup>
import { ref, computed } from 'vue'
import SearchBar from '../ui/SearchBar.vue'
import ChatItem from './ChatItem.vue'

const isToggledMenu = ref(true)
const widthMenu = computed(() => isToggledMenu.value ? '364px' : '80px')
const toggleMenu = () => isToggledMenu.value = !isToggledMenu.value
</script>

<template>
  <div class="chat-list__wrapper" :style="{width: widthMenu}">
    <SearchBar @toggleMenu="toggleMenu" />
    <div class="chat-list">
      <ChatItem :variant="isToggledMenu ? 'default' : 'small'" verifyed :unread="1" />
      <ChatItem :variant="isToggledMenu ? 'default' : 'small'" :unread="2" />
      <ChatItem :variant="isToggledMenu ? 'default' : 'small'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-list {
  min-width: 80px;
  max-width: 364px;
  width: auto;

  &__wrapper {
    transition: width 0.3s ease;
  }
}
</style>