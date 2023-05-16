<template>
    <p class="error error--auth" v-if="err != null">
      <li>{{ err }}</li>
    </p>
  </template>
  <script>
  export default {
    props: {
      err: String,
    },
  };
  </script>
  <style scoped lang="scss">
  </style>
  