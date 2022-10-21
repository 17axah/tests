1. Что будет если сравнить: 0 == false ? (==)
2. Что будет если сравнить: 0 === false ? (===)
3. Что выведет console.log ? (Есть подвох)
```javascript
var name = 'xxx'

function changeName() {
  name = 'qwerty'
}

console.log(name) // ???
```
4. Что выведет console.log ?
```javascript
var name = 'xxx'

function changeName() {
  name = 'qwerty'
}
changeName()

console.log(name) // ???
```
5. Что выведет console.log ?
```javascript
function changeName() {
  var name = 'qwerty'
}
var name = 'xxx'

changeName()

console.log(name) // ???
```