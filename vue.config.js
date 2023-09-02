const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타겟 디렉토리
  outputDir: "../diary/src/main/resources/static",

  // npm run serve 프록시 설정
  // change origin true
  devServer: {
    proxy: {
      '/' : {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  }
})

