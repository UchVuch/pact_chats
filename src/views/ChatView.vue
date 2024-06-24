<script setup>
import { ref } from 'vue'
import ChatList from '../components/Chat/ChatList.vue'
import TopBar from '../components/ui/TopBar.vue'
import MessagesList from '../components/Messages/MessagesList.vue'
import InputBar from '../components/ui/InputBar.vue'

// тут при наличии бека используем useRoute, получаем :id из строки запроса и делаем запрос на бек для получения сообщений
const messages = ref([
  {
    id: 1,
    text: 'Hi, how are you?',
    time: '10:00',
    date: 1719007200,
    status: true,
    me: false
  },
  {
    id: 2,
    text: `I'm okay, what about you?`,
    time: '15:00',
    date: 1719110800,
    status: true,
    me: false
  },
  {
    id: 3,
    text: 'Привет, все работает',
    time: '10:12',
    date: 1719190800,
    status: false,
    me: true
  }
])
const sendNewMessage = (text) => {
  messages.value.push({
    id: messages.value.length + 1,
    text,
    time: '10:00',
    date: Math.floor(new Date().getTime() / 1000),
    status: false,
    me: messages.value.length % 2 ? true : false
  })
}
</script>

<template>
  <div class="page">
    <ChatList/>
    <div class="chat">
      <TopBar/>
      <div class="chat__content">
        <div class="chat__content-inner">
          <MessagesList class="chat__list" :messages="messages"/>
          <InputBar @send-message="sendNewMessage"/>
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
  display: flex;
  flex-direction: column;

  &__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: $iceberg-blue;
    padding: 24px;
  }

  &__content-inner {
    flex-grow: 1;
    width: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__list {
    margin-bottom: 16px;
  }
}
</style>