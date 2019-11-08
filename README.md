# vue-ui-collection

## Install
```
npm i vue-ui-collection -S
```

## Quick Start
``` javascript
import {collection} from 'vue-ui-collection';
import 'vue-ui-collection/dist/vue-ui-collection.css';

Vue.use(collection);

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
```
## html
```html
  <template>
    <dialogUpload :visible="dialogVisible" @complete="onComplete" @cancel="dialogVisible = false" />
  </template>
```

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
