# vue-ui-collection

## Install
```
npm i vue-ui-collection -S
```

## Quick Start
``` javascript
import dialogUpload from 'vue-ui-collection';

new Vue({
  data(){
    return{
      dialogVisible: true
    }
  },
  components: {
    dialogUpload
  },
  methods: {
    <!-- 点击完成获取上传 fileList 关闭弹层 -->
    onComplete(fileList) {
      this.dialogVisible = false;
    }
  }
})
```
## html
、、、
  <dialogUpload :dialog-visible="dialogVisible" @complete="onComplete" />
、、、

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
