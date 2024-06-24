<script setup>
import BaseIcon from '../base/BaseIcon.vue'

defineProps({
  variant: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'small'].includes(value)
    }
  },
  name: {
    type: String,
    default: 'Name'
  },
  message: {
    type: String,
    default: 'Чат был обновлен'
  },
  time: {
    type: String,
    default: '12:00'
  },
  unread: {
    type: Number,
    default: 0
  },
  verifyed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="chat-item">
    <img src="../../assets/images/Avatar.png" alt="Avatar" width="48" height="48">
    <div class="chat-item__info" v-show="variant === 'default'">
      <div class="chat-item__name">
        <p>{{ name }}</p>
        <BaseIcon v-if="verifyed" name="verified" />
      </div>
      <p class="chat-item__message">{{ message }}</p>
    </div>
    <div class="chat-item__right" v-show="variant === 'default'">
      <p class="chat-item__time">{{ time }}</p>
      <div v-if="unread > 0" class="chat-item__unread">{{ unread }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-item {
  user-select: none;
  overflow: hidden;
  border-right: 1px solid #D9DCE0;
  max-height: 72px;
  display: flex;
  gap: 16px;
  background-color: transparent;
  padding: 12px 16px;
  transition: background-color 0.3s ease, border-right 0.3s ease;

  &:hover {
    border-right: 1px solid #D9DCE0;
    background-color: #F5F5F5;
  }

  &__info {
    flex-grow: 1;
  }

  &__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: $main-text;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 6px;
  }

  &__message {
    font-size: 14px;
    line-height: 18px;
    color: $secondary-text;
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__time {
    font-size: 12px;
    line-height: 16px;
    color: $secondary-text;
    margin-bottom: 8px;
  }

  &__unread {
    border-radius: 50%;
    font-size: 12px;
    line-height: 16px;
    color: $white;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $light-green;
  }
}
</style>