module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: './src/ts/index.ts',
  output: {
    path: `${__dirname}/dist/assets/js`,
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: [
      '.ts', '.js', '.vue'
    ]
  }
}