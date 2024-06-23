<script setup>
import MessagesItem from './MessagesItem.vue';

const messages = [
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
    date: 1719200800,
    status: false,
    me: true
  }
]

const currentDate = Math.floor(new Date().getTime() / 1000)
const formatDateRu = (date) => new Date(date * 1000).toLocaleDateString('ru-RU')
</script>

<template>
  <div class="messages">
    <div v-if="messages.length" class="messages__list">
      <template v-for="message in messages">
        <div v-if="formatDateRu(message.date).slice(0,2) === formatDateRu(currentDate).slice(0, 2)" class="messages__chip">
          Сегодня
        </div>
        <div v-if="Number(formatDateRu(currentDate).slice(0, 2) - formatDateRu(message.date).slice(0,2)) === 1" class="messages__chip">
          Вчера
        </div>
        <div v-if="Number(formatDateRu(currentDate).slice(0, 2) - formatDateRu(message.date).slice(0,2)) > 1" class="messages__chip">
          {{ formatDateRu(message.date) }}
        </div>
        <MessagesItem
          :text="message.text"
          :time="message.time"
          :status="message.status"
          :me="message.me"
        />
      </template>
    </div>
    <div v-else class="messages__list">
      <div class="messages__chip">
        Сообщений пока нет
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.messages {
  &__chip {
    border-radius: 12px;
    font-size: 16px;
    line-height: 20px;
    color: $white;
    background-color: #3D70B899;
    padding: 4px 12px;
    margin-inline: auto;
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 24px;
  }
}
</style>