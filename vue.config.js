const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/timer',
  outputDir: 'docs',
  assetsDir: 'static',
	transpileDependencies: true,
})
