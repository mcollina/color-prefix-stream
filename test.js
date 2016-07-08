'use strict'

const test = require('tap').test
const proxyquire = require('proxyquire')
const chalk = require('chalk')
const prefixer = proxyquire('.', {
  chalk: new chalk.constructor({ enabled: true })
})

test('add a prefix', (t) => {
  t.plan(1)

  const instance = prefixer({ prefix: 'abcde' })

  instance.end(new Buffer('a line'))

  instance.on('data', (line) => {
    t.equal(line, chalk.stripColor('abcde: a line'))
  })
})

test('add a prefix and changes the separator', (t) => {
  t.plan(1)

  const instance = prefixer({
    prefix: 'another',
    separator: ' - '
  })

  instance.end(new Buffer('a line'))

  instance.on('data', (line) => {
    t.equal(line, chalk.stripColor('another - a line'))
  })
})

test('add a prefix and color', (t) => {
  t.plan(1)

  const instance = prefixer({
    prefix: 'abcde: ',
    color: 'red'
  })

  instance.end(new Buffer('a line'))

  instance.on('data', (line) => {
    t.ok(chalk.hasColor(line))
  })
})

test('rotates the color', (t) => {
  t.plan(1)

  const instance = prefixer({
    rotate: true
  })

  instance.end(new Buffer('a line'))

  instance.on('data', (line) => {
    t.ok(chalk.hasColor(line))
  })
})
