var assert = require('assert'),
	funo = require('../funo'),
	fixture = require('./fixtures').main

describe('filter', function () {
	it('should return correct result', function () {
		var expected = {
				internet: fixture.internet
			},
			result = funo.filter(fixture, port => port.isWan)

		assert.deepEqual(expected, result)
	})

	it('should return empty object', function () {
		var expected = {},
			result = funo.filter(fixture, port => port.alias === 'LAN5')

		assert.deepEqual(expected, result)
	})
})
