<script setup>
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: $btn-icon-bg;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: $btn-icon-bg-hover;
  }
}
</style>