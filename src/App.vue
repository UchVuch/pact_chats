<script setup>
import ChatList from './components/Chat/ChatList.vue'
</script>

<template>
  <div class="page">
    <ChatList/>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>