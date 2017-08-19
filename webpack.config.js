/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/12/17
 * @Email:  sanikommu@gmail.com
 * @Filename: webpack.config.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/12/17
 */


module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};