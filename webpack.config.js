const path = require('path');

module.exports = {
  entry: './src/knight-travails.js',
  mode:'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

   module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:['file-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  devtool:'source-map'
  
};