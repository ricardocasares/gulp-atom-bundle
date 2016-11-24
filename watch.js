module.exports = (gulp, cfg) => {
  const merge = require('deepmerge')

  return require('./task')(gulp, merge(cfg, {
    watchify: {
      watch: true
    }
  }))
}
