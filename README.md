# color-prefix-stream

Add a color and a prefix to each line in a stream

* [Install](#install)
* [Example](#example)
* [API](#api)
* [Acknowledgements](#acknowledgements)
* [License](#license)

<a name="install"></a>
## Install

To install `color-prefix-stream`, simply use npm:

```
npm install color-prefix stream --save
```

<a name="example"></a>
## Example

The example below can be found [here][example] and ran using `node example.js`. It uses `color-prefix-stream` to print multiple lines using random-picked colors.

```js
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
```

<a name="api"></a>
## API

### prefixer([opts])

Returns a [split2][split2] stream configure to add a prefix and a color
to each line.

Options:

* `prefix`: the prefix to prepend.
* `separator`: to be used between the prefix and the line, defaults to `: `.
* `color`: the [chalk][chalk] color to use.
* `rotate`: rotate between a set of colors, with global state. Defaults
  to `false`.
* `eol`: the end of line to use to reconstruct the lines. Defaults to
  `require('os').EOL`.

## Acknowledgements

This project was kindly sponsored by [nearForm](http://nearform.com).

## License

Copyright Matteo Collina 2016, Licensed under [MIT][].

[MIT]: ./LICENSE
[example]: ./example.js
[split2]: https://github.com/mcollina/split2
[chalk]: https://npm.im/chalk
