/*
 * @Author: ganlan
 * @Date: 2021-06-05 14:23:49
 * @Description:
 */

// https://github.com/Lucifier129/promise-aplus-impl/blob/master/src/naive.js

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(fn) {
  this.state = PENDING
  this.result = null

  let callbacks = []

  let ignore = false
  let resolve = function (res) {
    if (ignore) {
      return
    }
    ignore = true
    this.state = FULFILLED
    callbacks.forEach((func) => {
      func(res)
    })
  }
  let reject = function (err) {
    if (ignore) {
      return
    }
    ignore = true
    this.state = REJECTED
    callbacks.forEach((func) => {
      func(err)
    })
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (func) {
  callbacks.push(func)
}

// const p = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//       resolve(10)
//   }, 1000);
// })
// p.then(res=>{
//  console.log(res) // 10
// })
