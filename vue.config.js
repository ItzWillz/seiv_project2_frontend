module.exports = {
  devServer: {
    host: 'localhost',
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/var/www/html/2023/project2/t2/',
  transpileDependencies: ['vuetify'],
};