// vue.config.js
module.exports = {
  configureWebpack: {
    entry: "index.js",//入口文件，就是上步骤的src目录下的index.js文件，
    output: {
      libraryExport: 'default'
    }
  },
  // 去掉文件名中的 hash
  filenameHashing: false,
  // 删除 HTML 相关的 webpack 插件
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}