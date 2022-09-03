module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.js', '.ts', '.json'],
      },
    ],
  ],

};
