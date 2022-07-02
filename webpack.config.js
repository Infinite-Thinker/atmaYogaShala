const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fs = require("fs")
let pages = []
let jsfiles = {
    login: "./src/login.js",
    common: "./src/common.js",
}
console.log("Building files : ")
fs.readdirSync("./src/pages").forEach(file => {
    if (file.endsWith(".html")) {
        let name = file.replace(".html", "")
        pages.push(name)
        jsfiles[name] = `./src/${name}.js`
        console.log(" ++ " + name)
    }
})

let multipleHtmlPlugins = pages.map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/pages/${name}.html`, // relative path to the HTML files
        filename: `./${name}.html`, // output HTML files
        chunks: [`${name}`, "common"], // respective JS files
    })
})

module.exports = {
    target: "web",
    entry: jsfiles,
    output: {
        path: path.resolve(__dirname, "public"),
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: multipleHtmlPlugins,
    mode: "development",
    devServer: {
        watchFiles: ["./src/pages/*.html", "./src/html/*.html"],
        open: false,
        compress: true,
        hot: true,
        liveReload: true,
    },
}
