const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  outputDir: 'index',
  assetsDir: 'static',
	transpileDependencies: true,
})
