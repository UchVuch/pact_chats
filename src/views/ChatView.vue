<script setup>
import ChatList from '../components/Chat/ChatList.vue'
import TopBar from '../components/ui/TopBar.vue'
import MessagesList from '../components/Messages/MessagesList.vue'
import InputBar from '../components/ui/InputBar.vue'

</script>

<template>
  <div class="page">
    <ChatList/>
    <div class="chat">
      <TopBar/>
      <div class="chat__content">
        <div class="chat__content-inner">
          <MessagesList class="chat__list"/>
          <InputBar/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
}

.chat {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &__content {
    flex-grow: 1;
    display: flex;
    background-color: $iceberg-blue;
    padding: 24px;
  }

  &__content-inner {
    width: 100%;
    align-self: flex-end;
  }

  &__list {
    margin-bottom: 16px;
  }
}
</style>