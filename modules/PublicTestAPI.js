/*eslint no-console: 0*/
import webpack from 'webpack'
import CLIENT from './webpack.client.config'

export function KarmaConf(config) {
  config.set({
    browsers: [ 'Chrome' ],
    frameworks: [ 'mocha' ],
    reporters: [ 'mocha' ],

    files: [ 'tests.webpack.js' ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: CLIENT.module.loaders
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test'),
          'process.env.FAIL_ON_WARNINGS': JSON.stringify(process.env.FAIL_ON_WARNINGS || false)
        })
      ]
    },

    webpackServer: {
      noInfo: true
    }

  })

}
