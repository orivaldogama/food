/* eslint-disable no-undef */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  dest: 'public',
  disable: !isProd
})
