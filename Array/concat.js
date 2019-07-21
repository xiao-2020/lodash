

function concat() {
  let len = arguments.length
  array = arguments[0] || []
  if(len < 2) {
    return len ? array.slice() : []
  } 
  var args = new Array(len - 1), result = []
  while(len--) {
    args[len - 1] = arguments[len]
  } 
  args.forEach(item => {
    result = result.concat(dealdone(item))
  })
  return array.concat(result)
}

function dealdone(data) {
  if(Object.prototype.toString.call(data) !== '[object Array]') {
    return [data]
  }
  if(Object.prototype.toString.call(data) === '[object Array]') {
    return data
  }
}

var res = concat([1], 2,[[3]],[4])
console.log(res)