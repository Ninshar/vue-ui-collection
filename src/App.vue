<template>
  <div id="app">
    <dialogUpload :dialog-visible="dialogVisible" @complete="onComplete" />
  </div>
</template>

<script>
/* eslint-disable */
import dialogUpload from "./components/dialogUpload.vue";
export default {
  name: "app",
  data() {
    return {
      dialogVisible: true
    };
  },
  components: {
    dialogUpload
  },
  methods: {
    onComplete(fileList) {
      this.dialogVisible = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
