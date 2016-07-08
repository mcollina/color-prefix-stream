'use strict'

const split = require('split2')
const chalk = require('chalk')
const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray']
var currentColor = 0

module.exports = function prefixer (opts) {
  opts = opts || {}

  const prefix = opts.prefix || ''
  const separator = opts.separator || ': '
  const color = chalk[opts.color] || opts.rotate ? chalk[nextColor()] : noop

  return split(function (line) {
    return color(prefix + separator + line)
  })
}

function noop (line) {
  return line
}

function nextColor () {
  if (currentColor === colors.length) {
    currentColor = 0
  }
  return colors[currentColor++]
}
