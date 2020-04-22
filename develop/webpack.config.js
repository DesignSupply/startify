module.exports = {
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
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  }
}