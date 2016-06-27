/**
 * Create an instance
 * @function create
 * @returns {SugoAgentCompile}
 */
'use strict'

const SugoAgentCompile = require('./sugo_agent_compile')

/** @lends create */
function create (...args) {
  return new SugoAgentCompile(...args)
}

module.exports = create
