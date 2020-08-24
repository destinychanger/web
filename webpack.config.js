const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      /* for css linking images */   
      {
        test: /\.(jpg|gif|png|svg)$/i,
        loader: 'file-loader',
        options: {
            esModule: false,
          },
          include: path.join(__dirname, 'src'),
         
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true
  },
  node: {
    fs: "empty"
  }

}