<script setup>
import { ref, computed } from 'vue'
import SearchBar from '../ui/SearchBar.vue'
import ChatItem from './ChatItem.vue'
import { RouterLink } from 'vue-router';

const chats = [
  {
    id: 1,
    name: 'Name',
    message: 'Чат был обновлен',
    time: '11:00',
    unread: 1,
    verifyed: true
  },
  {
    id: 2,
    name: 'Name 2',
    message: 'Чат был обновлен',
    time: '12:00',
    unread: 2,
    verifyed: false
  },
  {
    id: 3,
    name: 'Name 3',
    message: 'Чат был обновлен',
    time: '10:00',
    unread: 0,
    verifyed: false
  },

]

const isToggledMenu = ref(true)
const widthMenu = computed(() => isToggledMenu.value ? '364px' : '80px')
const toggleMenu = () => isToggledMenu.value = !isToggledMenu.value

const chatList = ref([...chats])
const searchChat = (chatName) => {
  const serachedChats = chats.filter((chat) => chat.name.includes(chatName))
  if (searchChat.length === 0) {
    chatList.value = [...chats]
  } else {
    chatList.value = [...serachedChats]
  }
}
</script>

<template>
  <div class="chat-list__wrapper" :style="{width: widthMenu}">
    <SearchBar @toggleMenu="toggleMenu" @search-chat="searchChat" />
    <div class="chat-list">
      <RouterLink
        v-for="chat in chatList"
        :key="chat.id"
        :to="`/chat/${chat.id}`"
        class="chat-list__link"
        exactActiveClass="chat-list__link--active"
      >
        <ChatItem
          :variant="isToggledMenu ? 'default' : 'small'"
          :name="chat.name"
          :message="chat.message"
          :time="chat.time"
          :verifyed="chat.verifyed"
          :unread="chat.unread"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-list {
  min-width: 80px;
  max-width: 364px;
  width: auto;

  &__wrapper {
    border-right: 1px solid #D9DCE0;
    background-color: $white;
    transition: width 0.3s ease;
  }

  &__link {
    text-decoration: none;
  }

  &__link--active :deep(.chat-item) {
    background-color: #F5F5F5;
  }
}
</style>