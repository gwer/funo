# Funo
Funo implements map, filter, reduce functions for objects handling. 

In the JS core these functions are implemented only for arrays. Such libraries as underscore and lodash can work with objects, but they return an array. Thus the information stored in the keys of the original object is lost. Funo solves this problem.
## Install
### Node.js
```
npm install funo
```
```js
var funo = require('funo')
```
### Browser
First download funo.js, then include it on the page:
```
<script src="funo.js"></script>
```
## Usage
```js
var a = {
    port4: { alias: 'LAN4', isWan: false },
    port3: { alias: 'LAN3', isWan: false },
    port2: { alias: 'LAN2', isWan: false },
    port1: { alias: 'LAN1', isWan: false },
    wifi1: { alias: 'WiFi', isWan: false },
    internet: { alias: 'WAN', isWan: true }
}
console.log(funo.map(a, port => port.alias))
/*{
    port4: 'LAN4',
    port3: 'LAN3',
    port2: 'LAN2',
    port1: 'LAN1',
    wifi1: 'WiFi',
    internet: 'WAN'
}*/

console.log(funo.filter(a, port => port.isWan))
/*{
    internet: { alias: 'WAN', isWan: true }
}*/
```

## Version
0.2.0
