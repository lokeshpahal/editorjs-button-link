module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          removeSVGTagAttrs: false,
        },
      },
    ],
  },
  output: {
    filename: 'button-link.js',
    library: 'ButtonLink',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
};
