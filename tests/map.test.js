var assert = require('assert'),
	funo = require('../funo'),
	fixture = require('./fixtures').main

describe('map', function () {
	it('should return correct result', function () {
		var expected = {
				port4: 'LAN4',
				port3: 'LAN3',
				port2: 'LAN2',
				port1: 'LAN1',
				wifi1: 'WiFi',
				internet: 'WAN'
			},
			result = funo.map(fixture, port => port.alias)

		assert.deepEqual(expected, result)
	})
})
