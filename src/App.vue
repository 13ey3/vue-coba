<template>
  <div id="app">
    <div id="nav">
      <NavigationBar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  components: { NavigationBar },
};
</script>
