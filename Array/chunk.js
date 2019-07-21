
/**
 * 
 * @param {Array} array 需要拆分的数组
 * @param {Number} size  拆分的单元长度
 * @returns {Array[Array]} 返回的处理后的数组
 */
function chunk(array, size = 1) {
    let tempArr = [], res = []
    array.forEach((item, index) => {
        tempArr.push(item)
        if(tempArr.length === size) {
            res.push(tempArr)
            tempArr = []
        }
    })
    if(tempArr.length) res.push(tempArr)
    return res
}


// 源码基本原理
function _chunk(array, size = 1) {
    if(array.length === 0 || size < 1) return []
    let index = 0, resIndex = 0, len = array.length, result = new Array(Math.ceil(len / size))
    while(index < len) {
        result[resIndex++] = array.slice(index, index += size)
    }
    return result
}

console.log(_chunk([1,2,3,4,5,6], 9))