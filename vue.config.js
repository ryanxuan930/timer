const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  outputDir: 'docs',
  assetsDir: 'static',
	transpileDependencies: true,
})
