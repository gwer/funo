;(function() {

    var funo = {
        map: map,
        filter: filter,
        reduce: reduce,
        toArray: toArray
    }

    function map(obj, fn) {
        return reduce(obj, mapFn, {})

        function mapFn(acc, item, key, obj) {
            return setProp(acc, key, fn(item, key, obj))
        }
    }

    function filter(obj, fn) {
        return reduce(obj, filterFn, {})

        function filterFn(acc, item, key, obj) {
            return fn(item, key, obj) ? setProp(acc, key, item) : acc
        }
    }

    function reduce(obj, fn, initial) {
        var result = initial

        for (var key in obj) {
            result = fn(result, obj[key], key, obj)
        }
        return result
    }

    function toArray(obj) {
        return obj ? Object.keys(obj).map(function(key){return obj[key]}) : []
    }

    function setProp(obj, key, property) {
        return (obj[key] = property, obj)
    }

    if (typeof module !== 'undefined'
        && typeof module.exports !== 'undefined') {
        module.exports = funo
    } else {
        window.funo = funo
    }
})()
