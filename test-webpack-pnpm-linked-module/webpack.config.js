const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.jsx', // 入口文件路径
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist-require'), // 输出目录的绝对路径
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 匹配 .js 或 .jsx 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader', // 使用 Babel 加载器进行转译
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // 使用的 Babel 预设
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 自动解析的文件扩展名
  },
};
