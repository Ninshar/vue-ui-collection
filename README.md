# vue-ui-collection

## 使用方法
、、、
  npm i vue-ui-collection
、、、
、、、
  1. import dialogUpload from 'vue-ui-collection';

  2. new Vue({
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
  
  3. 
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
