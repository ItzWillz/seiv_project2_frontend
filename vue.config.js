module.exports = {
  devServer: {
    host: 'localhost',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/course-t2/',
  transpileDependencies: ['vuetify'],
};