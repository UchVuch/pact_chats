<script setup>
import { ref, watch } from 'vue'
import ButtonIcon from './ButtonIcon.vue'
import BaseIcon from '../base/BaseIcon.vue'

const emits = defineEmits(['sendMessage'])

const inputValue = ref('')
const isSendError = ref(false)
const sendMessage = () => {
  if (inputValue.value) {
    emits('sendMessage', inputValue.value)
    inputValue.value = ''
  } else {
    isSendError.value = true
  }
}

watch(inputValue, () => isSendError.value = false)
</script>

<template>
  <div class="input-bar">
    <p v-if="isSendError" class="input-bar__error">Введите сообщение</p>
    <ButtonIcon title="emoji">
      <BaseIcon name="emoji" color="#707991" size="24" />
    </ButtonIcon>
    <input
      v-model="inputValue"
      @keyup.enter="sendMessage"
      class="input"
      :class="{'input-error': isSendError}"
      type="text"
      placeholder="Напишите сообщение"
    >
    <ButtonIcon title="send" @click="sendMessage">
      <BaseIcon name="send" color="#8BABD8" />
    </ButtonIcon>
  </div>
</template>

<style lang="scss" scoped>
.input-bar {
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: $white;
  padding: 16px;

  &__error {
    position: absolute;
    top: 0;
    left: 66px;
    font-size: 12px;
    color: $error;
  }
}

.input-error {
  outline: 1px solid $error;
}

.input {
  border: none;
  border-radius: 5px;
  flex-grow: 1;
  color: $rich-black;
  padding: 5px;
  
  &,
  &::placeholder {
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }

  &::placeholder {
    color: $navy-grey;
  }
}
</style>