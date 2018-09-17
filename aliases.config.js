const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

const fullAliases = {
  '@design': 'client/scss/index.scss',
}

const pathAliases = {
  '@atoms': 'client/components/atoms',
  '@molecules': 'client/components/molecules',
}

const allAliases = { ...fullAliases, ...pathAliases }

module.exports = {
  nuxt: {},
  jest: {},
}

for (const alias in allAliases) {
  module.exports.nuxt[alias] = resolveSrc(allAliases[alias])
}

for (const alias in pathAliases) {
  module.exports.jest['^' + alias + '/(.*)$'] =
    '<rootDir>/' + pathAliases[alias] + '/$1'
}

for (const alias in fullAliases) {
  module.exports.jest['^' + alias + '$'] = '<rootDir>/' + fullAliases[alias]
}
