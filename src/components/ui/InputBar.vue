<script setup>
import ButtonIcon from './ButtonIcon.vue'
import BaseIcon from '../base/BaseIcon.vue'


</script>

<template>
  <div class="input-bar">
    <ButtonIcon title="emoji">
      <BaseIcon name="emoji" color="#707991" size="24" />
    </ButtonIcon>
    <input class="input" type="text" placeholder="Напишите сообщение">
    <ButtonIcon title="send">
      <BaseIcon name="send" color="#8BABD8" />
    </ButtonIcon>
  </div>
</template>

<style lang="scss" scoped>
.input-bar {
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: $white;
  padding: 16px;
}

.input {
  border: none;
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