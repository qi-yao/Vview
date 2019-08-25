const path = require("path"); //路径
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //webpack打包工具 npm i uglifyjs-webpack-plugin -D

//判断是否是生产环境
const isProduction = process.env.NODE_ENV === "production";
//引入文件
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  //基本路径 2.0
  publicPath: "./", //原先是baseUrl publicPath代替
  //输出文件路径
  outputDir: "dist",
  // 放置生成静态资源（js、css、img、fonts）的（相对于outputDir的）目录。
  // assstsDir: "./",
  //指定生成的index.html 的输出路径（相对于outputDir的）也可以是个绝对路径
//   indexPath: "./",
  //eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  devServer: {
    compress: false //开启压缩
    // open: true, //自动开启浏览器
    //解决跨域问题
    // proxy: {
    //   api: {
    //     target: "http://www.daili.com", //需要代理的服务器地址
    //     ws: true, //webscokt 长链接
    //     changeOrigin: true, //是否允许跨域
    //     pathRewrite: {
    //       //重写，把捕获到的api重写成 /
    //       api: "/"
    //     }
    //   }
    // }
  },
  //css相关配置
  css: {
    //分离插件 npm i mini-css-extract-plugin -D
    // extract: true,
    //主要用于开发人员定位问题，如果为true打包时间将会大幅度加长
    sourceMap: false,
    //css预处理器
    loaderOptions: {
      sass: {
          //引入全局变量样式
        data: `
                    @import "@/assets/common/index.scss";
                `
      }
    },
    //启用 CSS modules for all css / pre-processor files
    modules: false
  },
  //webpack配置

  chainWebpack: config => {
    //配置别名 不配置报错
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/img"))
      .set("@scss", resolve("src/assets/common"));
    //判断是否生产环境
    if (isProduction) {
      //删除预加载
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      //压缩代码
      config.optimization.minimize(true);
      //分割成块 --相同类型
      config.optimization.splitChunks({
        chunks: "all"
      })
      //注入cdn
    } else {
      //其他环境做配置
    }
  },
  configureWebpack: config => {
    //判断是否生产环境
    if (isProduction) {
      //注入cdn

      //进行打包优化
      config.plugins.push(
        new UglifyJsPlugin({
          //删除drop_debugger 和打印
          uglifyOptions: {
            compress: {
                //warnings: false,
              drop_debugger: true,
              drop_console: true
            },
            //生产环境不需要调试关掉
            sourceMap: false,
            //多进程并行提高构建速度
            parallel: true
          }
        })
      );
    } else {
      //其他环境做配置
    }
  },
  //生产环境是否生成SourceMap
  productionSourceMap: false,
  //启用并行化 默认并发运行数 默认('os').cpus().length - 1， 显著加速构建，可以同时操作多个文件
  parallel: require("os").cpus().length > 1
};
