const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "微信阅读";
      return args;
    });
  },
  // devServer: {
  //   proxy: "http://localhost:3000",
  // },
  devServer: {
    proxy: {
      "/api1": {
        // 匹配所有以 '/api1'开头的请求路径
        target: "http://localhost:3000", // 代理目标的基础路径
        pathRewrite: { "^/api1": "" }, // 代理往后端服务器的请求去掉 /api1 前缀
        ws: false, // WebSocket
        changeOrigin: true, //模仿服务器的主机信息
      },
      "/api2": {
        target: "http://localhost:3001",
        pathRewrite: { "^/api2": "" },
        changeOrigin: true,
      },
    },
  },
});
