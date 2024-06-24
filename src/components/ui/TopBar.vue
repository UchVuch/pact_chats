<script setup>
import { useRoute } from 'vue-router'
import ButtonIcon from './ButtonIcon.vue'
import BaseIcon from '../base/BaseIcon.vue'

defineProps({
  name: {
    type: String,
    default: 'Name'
  },
  latestTime: {
    type: String,
    default: '5 минут назад'
  }
})

// а пока просто для наглядности меняем id рядом с name :) с помощью useRoute
const route = useRoute()
</script>

<template>
  <div class="top-bar">
    <div class="top-bar__info">
      <img src="../../assets/images/Avatar.png" alt="avatar" width="40" height="40">
      <div>
        <p class="top-bar__name">{{ name }} {{ route.params.id }}</p>
        <p class="top-bar__time">в сети {{ latestTime }}</p>
      </div>
    </div>
    <div class="top-bar__actions">
      <ButtonIcon title="search">
        <BaseIcon name="search" color="#707991" />
      </ButtonIcon>
      <ButtonIcon title="call">
        <BaseIcon name="call" color="#707991" />
      </ButtonIcon>
      <ButtonIcon title="more">
        <BaseIcon name="more" color="#707991" />
      </ButtonIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  border-bottom: 1px solid #D9DCE0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background-color: $white;
  padding: 8px 16px;

  &__info {
    flex-grow: 1;
    display: flex;
    gap: 16px;
  }

  &__name {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: $main-text;
    margin-bottom: 4px;
  }

  &__time {
    font-size: 14px;
    line-height: 18px;
    color: $secondary-text;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>