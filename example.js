'use strict'

const prefixer = require('.')

const instances = [
  prefixer({ prefix: 'i1', rotate: true }),
  prefixer({ prefix: 'i2', rotate: true }),
  prefixer({ prefix: 'i3', rotate: true })
]

instances.forEach((i) => i.pipe(process.stdout, { end: false }))

function print () {
  instances.forEach((i) => i.write(Math.random() + '\n'))
  setTimeout(print, 1000)
}

print()
