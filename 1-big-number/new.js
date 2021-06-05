/*
 * @Author: ganlan
 * @Date: 2021-06-05 12:23:07
 * @Description:
 */

function bigNumber(num1, num2) {
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return num11 || num2
  }
  let arr1 = `${num1}`.split('').reverse()
  let arr2 = `${num2}`.split('').reverse()

  let result = []

  let index1 = 0
  let index2 = 0
  let carry = 0
  while (index1 < arr1.length || index2 < arr2.length) {
    let sum =
      (index1 < arr1.length ? +arr1[index1] : 0) +
      (index2 < arr2.length ? +arr2[index2] : 0) +
      carry
    carry = parseInt(sum / 10)
    // console.log('carry', carry, sum % 10)

    result.push(sum % 10)
    index1++
    index2++
  }
  return result.reverse().join('')
}

// bigNumber(1234,321)
// bigNumber('90129324932849328948924820','34378378374837894738473284')