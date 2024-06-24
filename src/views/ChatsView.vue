<script setup>
</script>

<template>
    <div class="chat">
      <div class="chat__content">
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