<template>
  <p>got result: {{ data }}</p>
</template>

<script>
export default {
  async asyncData({ app }) {
    const data = app.$orchid.request('/');
    return {
      data: JSON.stringify(data),
    };
  },
};
</script>
