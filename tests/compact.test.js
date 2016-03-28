var assert = require('assert'),
	funo = require('../funo'),
	fixture = {
		'false': false,
		'null': null,
		'zero': 0,
		'undefined': undefined,
		'nan': NaN,
		'emptyStr': '',
		'falseStr': 'false',
		'nullStr': 'null',
		'zeroStr': '0',
		'undefinedStr': 'undefined',
		'nanStr': 'NaN',
		'someStr': 'foo',
		'someDigit': 1,
		'negativeDigit': -1,
		'true': true,
		'emptyObject': {},
		'notEmptyObject': {foo: 'bar'},
		'emptyArray': [],
		'notEmptyArray': [0],
	}

describe('compact', function () {
	var result = funo.compact(fixture)

	it('should not contain falsy values', function () {
		var keys = [
				'false',
				'null',
				'zero',
				'undefined',
				'nan',
				'emptyStr'
			],
			check = key => {assert(!(key in result))}

		keys.forEach(check)
	})

	it('should contain strings like falsy', function () {
		var keys = [
				'falseStr',
				'nullStr',
				'zeroStr',
				'undefinedStr',
				'nanStr'
			],
			check = key => {assert(key in result)}

		keys.forEach(check)
	})

	it('should contain truthy values', function () {
		var keys = [
				'someStr',
				'someDigit',
				'negativeDigit',
				'true',
				'emptyObject',
				'notEmptyObject',
				'emptyArray',
				'notEmptyArray',
			],
			check = key => {assert(key in result)}

		keys.forEach(check)
	})
})
