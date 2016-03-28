var assert = require('assert'),
	funo = require('../funo'),
	fixture = require('./fixtures').main

describe('toArray', function () {
	it('should return correct result', function () {
		var expected = [
				fixture.port4,
				fixture.port3,
				fixture.port2,
				fixture.port1,
				fixture.wifi1,
				fixture.internet
			],
			result = funo.toArray(fixture)

		assert.deepEqual(expected, result)
	})

	it('should correct handle empty object', function () {
		assert.deepEqual(funo.toArray({}), [])
	})
})
