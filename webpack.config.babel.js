import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'www'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Phaser Game'})
  ],
  devServer: {
    open: true,
    contentBase: resolve(__dirname, 'www')
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: resolve(__dirname, 'src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      'phaser': resolve(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js'),
      'pixi': resolve(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
      'p2': resolve(__dirname, 'node_modules/phaser-ce/build/custom/p2.js')
    }
  }
}

export default config
