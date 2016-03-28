var assert = require('assert'),
	funo = require('../funo'),
	fixture = require('./fixtures').main

describe('reduce', function () {
	it('should return correct result', function () {
		var countNotWan = (acc, port) => port.isWan ? acc : acc + 1,
			expected = 5,
			result = funo.reduce(fixture, countNotWan, 0)

		assert.deepEqual(expected, result)
	})
})
