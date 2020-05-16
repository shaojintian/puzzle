module.exports = {
	publicPath: 'vue',
	outputDir: 'output',
    productionSourceMap: true,
    devServer: {
        proxy: {
            '/users':{
                target: "https://api.github.com",
                changeOrigin: true
            }
        }
    }
}
