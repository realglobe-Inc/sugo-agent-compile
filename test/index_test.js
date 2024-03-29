/**
 * Test case for index.
 * Runs with mocha.
 */
'use strict'

const index = require('../lib/index.js')
const assert = require('assert')
const co = require('co')

describe('sugo-agent-base', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Eval props', () => co(function * () {
    assert.ok(index)
    assert.ok(index.SugoAgentCompile)
    assert.ok(index())
  }))
})

/* global describe, before, after, it */
