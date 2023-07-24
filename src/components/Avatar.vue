<template>
  <div class="avatar" :style="avatarStyle">
    <div class="avatar__initial">{{ initial }}</div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    initial: {
      type: String,
      required: true,
    },
  },
  computed: {
    avatarStyle() {
      return {
        backgroundColor: this.color,
      }
    },
  },
}
</script>
<style scoped lang="scss">
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;

  &__initial {
    font-size: 16px;
    font-weight: bold;
    color: #3d3d3b;
  }
}
</style>
