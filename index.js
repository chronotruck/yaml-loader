const YAML = require('yaml')

module.exports = function yamlLoader(src) {
  const doc = YAML.parseDocument(src)
  for (const warn of doc.warnings) {
    this.emitWarning(warn)
  }
  for (const err of doc.errors) {
    throw err
  }

  const res = doc.toJSON(null)

  return `
    const jsonData = ${JSON.stringify(res, null, 2)};
    module.exports = jsonData;
  `
}
