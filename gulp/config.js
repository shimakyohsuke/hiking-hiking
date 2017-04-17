'use strict'

import minimist from 'minimist'

const log = console['log']

const knownOptions = {
  string: 'env',
  default: {env: process.env.NODE_ENV || 'development'}
}
const options = minimist(process.argv.slice(2), knownOptions)
const isProduction = (options.env === 'production')
const isDevelopment = (options.env === 'development')

log('[build env]', options.env, '[is production]', isProduction)
log('[build env]', options.env, '[is development]', isDevelopment)

const baseConfig = {
  sourceDir: './src/',
  publishDir: './layouts/partials/'
}

const config = {
  baseConfig: baseConfig,
  envProduction: isProduction,
  envDevelopment: isDevelopment,
  tasks: {
    stylus: {
      src: [
        `${baseConfig.sourceDir}stylus/!(_)*.styl`,
        `${baseConfig.sourceDir}stylus/**/!(_)*.styl`
      ],
      watch: [
        `${baseConfig.sourceDir}stylus/**/*.styl`
      ]
    },
    webpack: {
      src: `${baseConfig.sourceDir}js/entry.js`,
      dest: `./static/js/`,
      filename: 'bundle.js',
      watch: [
        `${baseConfig.sourceDir}js/**/*.js`
      ]
    }
  }
}

module.exports = config
