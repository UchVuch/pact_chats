<script setup>
import { computed } from 'vue'
import BaseIcon from '../base/BaseIcon.vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  me: {
    type: Boolean,
    required: true
  }
})

const alignMessage = computed(() => props.me ? 'flex-end' : 'flex-start')
const bgColor = computed(() => props.me ? '#78E378' : '#fff')
const textColor = computed(() => props.me ? '#fff' : '#011627')
</script>

<template>
  <div class="message">
    <div class="message__inner">
      <p class="message__text">{{ text }}</p>
      <div class="message__bottom">
        <span class="message__date">{{ time }}</span>
        <BaseIcon
          v-if="!status"
          name="check"
          size="14"
          :color="textColor"
        />
        <template v-else>
          <BaseIcon
            name="check"
            size="14"
            :color="textColor"
          />
          <BaseIcon
            name="check"
            size="14"
            :color="textColor"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  display: flex;
  flex-direction: column;
  
  &__inner {
    align-self: v-bind(alignMessage);
    border-radius: 12px;
    color: v-bind(textColor);
    background-color: v-bind(bgColor);
    padding: 4px 12px;
  }

  &__text {
    font-size: 16px;
    line-height: 20px;
    color: $main-text;
    margin-bottom: 4px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
  }

  &__date {
    font-size: 12px;
    line-height: 16px;
    color: v-bind(textColor);
  }
}
</style>