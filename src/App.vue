<template>
  <div id="app">
    <dialogUpload :visible="dialogVisible" @complete="onComplete" @cancel="dialogVisible = false" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      dialogVisible: true
    };
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
