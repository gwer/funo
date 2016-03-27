var assert = require('assert'),
	funo = require('./funo'),
	fixture = {
		port4: { alias: 'LAN4', isWan: false },
		port3: { alias: 'LAN3', isWan: false },
		port2: { alias: 'LAN2', isWan: false },
		port1: { alias: 'LAN1', isWan: false },
		wifi1: { alias: 'WiFi', isWan: false },
		internet: { alias: 'WAN', isWan: true }
	}

describe('map', function () {
	it('should return correct result', function () {
		var expect = {
				port4: 'LAN4',
				port3: 'LAN3',
				port2: 'LAN2',
				port1: 'LAN1',
				wifi1: 'WiFi',
				internet: 'WAN'
			},
			result = funo.map(fixture, port => port.alias)

		assert.deepEqual(expect, result)
	})
})

describe('filter', function () {
	it('should return correct result', function () {
		var expect = {
				internet: fixture.internet
			},
			result = funo.filter(fixture, port => port.isWan)

		assert.deepEqual(expect, result)
	})

	it('should return empty object', function () {
		var expect = {},
			result = funo.filter(fixture, port => port.alias === 'LAN5')

		assert.deepEqual(expect, result)
	})
})

describe('reject', function () {
	it('should return correct result', function () {
		var expect = {
				internet: fixture.internet
			},
			result = funo.reject(fixture, port => !port.isWan)

		assert.deepEqual(expect, result)
	})

	it('should return empty object', function () {
		var expect = {},
			result = funo.reject(fixture, port => port.alias !== 'LAN5')

		assert.deepEqual(expect, result)
	})
})

describe('partition', function () {
	it('should return correct result', function () {
		var expect = [
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

		assert.deepEqual(expect, result)
	})

	it('should return correct result when one of parts is empty', function () {
		assert.deepEqual(funo.partition(fixture, port => true),
						 [{}, fixture])
		assert.deepEqual(funo.partition(fixture, port => false),
						 [fixture, {}])
	})
})

describe('reduce', function () {
	it('should return correct result', function () {
		var countNotWan = (acc, port) => port.isWan ? acc : acc + 1,
			expect = 5,
			result = funo.reduce(fixture, countNotWan, 0)

		assert.deepEqual(expect, result)
	})
})

describe('toArray', function () {
	it('should return correct result', function () {
		var expect = [
				fixture.port4,
				fixture.port3,
				fixture.port2,
				fixture.port1,
				fixture.wifi1,
				fixture.internet
			],
			result = funo.toArray(fixture)

		assert.deepEqual(expect, result)
	})

	it('should correct handle empty object', function () {
		assert.deepEqual(funo.toArray({}), [])
	})
})
