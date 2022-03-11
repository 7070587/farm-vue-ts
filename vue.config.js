const vueConfig = require('./src/vue.config');

module.exports = {
    publicPath: vueConfig.publicPath ? vueConfig.publicPath : '/',

    outputDir: vueConfig.dist ? vueConfig.dist : 'dist',

    productionSourceMap: vueConfig.isOutputSourceMap,

    pages: {
        index: {
            entry: 'main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            favicon: 'public/favicon.ico',
            title: vueConfig.pages && vueConfig.pages.title ? vueConfig.pages.title : 'Farm Vue',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
    },

    devServer: {
        open: vueConfig.devServer && vueConfig.devServer.open ? vueConfig.devServer.open : false, // 啟動server後是否自動打開瀏覽器，true-每次啟動都會打開新的
        host: vueConfig.devServer && vueConfig.devServer.host ? vueConfig.devServer.host : '0.0.0.0', // 允許外部ip訪問
        port: vueConfig.devServer && vueConfig.devServer.port ? vueConfig.devServer.port : 8080, // 埠號
        https: vueConfig.devServer && vueConfig.devServer.https ? vueConfig.devServer.https : false, // 是否啟用https
    },

    css: {
        sourceMap: vueConfig.isOutputSourceMap,
    },
};
