const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require(`path`);

module.exports = { //스크립트를 하나로 만들때 웹팩을 사용하고 이 파일은 웹 패킹할 때 사용
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: {
        app: path.join(__dirname, 'main.js'), // 여기에다 스크립트를 하나로 합침
    },
    module: {
        rules: [{ // 어떻게 처리 할 건지
            test: /\.vue$/,
            use: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ],
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', // 여기로 출력이 되고
        path: path.join(__dirname, `dist`), // 경로는 이렇게 된다.
        publicPath: '/dist',
    },
};