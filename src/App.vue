<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  transition: scroll-behavior 0.4s;
}

section {
  padding: 30px;
}
hr {
  margin: 0 auto;
  /* margin-top: 4%; */
  width: 20%;
  border: none;
  border: 1px solid orange;
}
</style>
