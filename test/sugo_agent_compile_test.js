/**
 * Test case for sugoAgentCompile.
 * Runs with mocha.
 */
'use strict'

const SugoAgentCompile = require('../lib/sugo_agent_compile.js')
const assert = require('assert')
const sgServer = require('sg-server')
const sugoEndpointCompile = require('sugo-endpoint-compile')
const { freeport } = sgServer
const co = require('co')

describe('sugo-agent-compile', function () {
  this.timeout(3000)
  let server, port
  before(() => co(function * () {
    port = yield freeport()
    server = sgServer({
      endpoints: {
        '/api/foo': (ctx) => {
          ctx.set('foo', 'This is foo')
          ctx.body = null
        },
        '/api/compile': sugoEndpointCompile()
      }
    })

    yield server.listen(port)
  }))

  after(() => co(function * () {
    yield server.close()
  }))

  it('Sugo demo agent', () => co(function * () {
    let agent = new SugoAgentCompile(`http://localhost:${port}`)
    assert.ok(agent)
    let ok = yield agent.knock('/api/foo')
    assert.ok(ok)

    let compiled = yield agent.compile(`
let foo = (...arg) => ['foo', ...args].join('')
foo()
`, { pathname: '/api/compile' })
    assert.ok(compiled)
  }))
})

/* global describe, before, after, it */
