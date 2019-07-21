/**
 * 筛选出数组中所有非假值  返回新的数组
 * @param {Array} array 
 */
function compact(array) {
    let result = []
    if(array.length) {
        let index = -1, len = array.length, resIndex = 0
        while(++index < len) {
            let val = array[index]
            if(val) {
                result[resIndex++] = val
            }
        }
    }
    return result
}

console.log(compact([1,2,'',null,NaN,6,7]))