<script setup>
import SearchBar from '../ui/SearchBar.vue'
import ChatItem from './ChatItem.vue'
</script>

<template>
  <div>
    <SearchBar/>
    <div class="chat-list">
      <ChatItem verifyed :unread="1" />
      <ChatItem :unread="2"/>
      <ChatItem/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>