const loader = require('../')

describe('basic', () => {
  it('exports a JS object', () => {
    const ctx = {}
    const src = `
      hello: world
      new-key: true
      with-number: 12
    `
    const res = loader.call(ctx, src)

    const parts = res.split('\n')
    expect(parts[0]).toEqual('')
    expect(parts[1]).toMatch('const jsonData = {')
    expect(parts[2]).toMatch('"hello": "world",')
    expect(parts[3]).toMatch('"new-key": true,')
    expect(parts[4]).toMatch('"with-number": 12')
    expect(parts[5]).toMatch('};')
    expect(parts[6]).toMatch('module.exports = jsonData;')
  })
})
