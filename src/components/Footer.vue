<template>
  <v-footer class="footer" dark>
    <v-card-text class="container">
      <strong>Focus desenvolvimento de Software - © </strong>
      <p>{{ new Date().getFullYear() }}</p>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  data: () => ({})
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  margin-top: 3%;
}
</style>