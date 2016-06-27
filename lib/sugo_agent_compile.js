/**
 * Client for sugo-endpoint-compile
 * @class SugoAgentCompile
 */
'use strict'

const { SugoAgentBase } = require('sugo-agent-base')
const co = require('co')

/** @lends SugoAgentCompile */
class SugoAgentCompile extends SugoAgentBase {
  constructor (url, options = {}) {
    super(url, options)
  }

  /**
   * Compile a script
   * @param {string} script
   * @param {Object} [options={}]
   * @param {string} [options.pathname] - Pathname to work with
   * @returns {Promise}
   */
  compile (script, options = {}) {
    const s = this
    let { request } = s
    let { pathname } = options
    return co(function * () {
      let { body } = yield request.post(s.resolve(pathname), {
        data: {
          type: 'javascript',
          attributes: { script }
        }
      })
      let { attributes } = body.data
      return attributes && attributes.script
    })
  }
}

module.exports = SugoAgentCompile
