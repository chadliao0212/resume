module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/resume/'
  //   : '/',
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  }
  
}