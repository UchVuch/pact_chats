<script setup>
import { onUpdated, ref } from 'vue'
import MessagesItem from './MessagesItem.vue'

defineProps({
  messages: {
    type: Array,  
    required: true
  }
})

const currentDate = Math.floor(new Date().getTime() / 1000)
const formatDateRu = (date) => new Date(date * 1000).toLocaleDateString('ru-RU')
const getDay = (date) => formatDateRu(date).slice(0,2)
const getDayFromMessage = (message) => formatDateRu(message.date).slice(0,2)

const chat = ref(null)
const scrollToBottomMessagesList = () => {
  setTimeout( () => chat.value.scrollTop = chat.value.scrollHeight, 10 )
}
onUpdated(() => {
  scrollToBottomMessagesList()
})
</script>

<template>
  <div class="messages">
    <div class="messages__inner" ref="chat">
      <div v-if="messages.length" class="messages__list">
        <template v-for="(message, index) in messages">
          <div v-if="index < 1" class="messages__chip">
            {{ formatDateRu(message.date) }}
          </div>
          <template v-else-if="getDay(message.date) !== getDayFromMessage(messages[index - 1])">
            <div v-if="getDay(message.date) === getDay(currentDate)" class="messages__chip">
              Сегодня
            </div>
            <div v-if="Number(getDay(currentDate) - getDay(message.date)) === 1" class="messages__chip">
              Вчера
            </div>
            <div v-if="Number(getDay(currentDate) - getDay(message.date)) > 1" class="messages__chip">
              {{ formatDateRu(message.date) }}
            </div>
          </template>
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
  </div>
</template>

<style lang="scss" scoped>
.messages {
  &__inner {
    max-height: 750px;
    overflow-y: auto;
  }

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