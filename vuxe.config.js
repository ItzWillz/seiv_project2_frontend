module.exports = {
  devServer: {
    host: 'localhost',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/2023/project2/t2/',
  transpileDependencies: ['vuetify'],
};