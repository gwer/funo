var assert = require('assert'),
	funo = require('../funo'),
	fixture = require('./fixtures').main

describe('partition', function () {
	it('should return correct result', function () {
		var expected = [
				{
					port4: fixture.port4,
					port3: fixture.port3,
					port2: fixture.port2,
					port1: fixture.port1,
					wifi1: fixture.wifi1
				},
				{
					internet: fixture.internet
				}
			],
			result = funo.partition(fixture, port => port.isWan)

		assert.deepEqual(expected, result)
	})

	it('should return correct result when one of parts is empty', function () {
		assert.deepEqual(funo.partition(fixture, port => true),
						 [{}, fixture])
		assert.deepEqual(funo.partition(fixture, port => false),
						 [fixture, {}])
	})
})
