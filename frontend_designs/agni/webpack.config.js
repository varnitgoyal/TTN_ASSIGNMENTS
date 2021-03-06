const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
	  rules:[
		  {
			  test: /\.scss$/,
			  use:[
				  'style-loader',
				  'css-loader',
				  'sass-loader'
			  ]
		  },

		  {
			  test: /\.css$/,
			  use: [
				  'style-loader',
				  'css-loader'
			   ]
		  },
		  {
			  test: /\.(png|svg|jpg|gif|jpeg)$/,
			  use: [
				  'file-loader'
			  ]
		  },

		  {
                         test: /\.(woff|woff2|eot|ttf|otf)$/,
                          use: [
                                 'file-loader'
                          ]
                 }
	  ]
  }
		  

  		
};
