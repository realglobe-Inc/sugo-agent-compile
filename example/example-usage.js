'use strict'

const sugoAgentCompile = require('sugo-agent-compile')
const co = require('co')

co(function * () {
  let agent = sugoAgentCompile('http://example.com')

  {
    // Check if server available
    let ok = yield agent.knock()
    /** ... */
  }
}).catch((err) => console.error(err))
