/*
 * @Author: ganlan
 * @Date: 2021-06-10 11:38:49
 * @Description: 
 */

function MyAssign(){
  let arr = Array.prototype.slice.call(arguments)||[]
  let obj = {}
  arr.forEach((element,index) => {
    if(Object.prototype.toString.call(element)==='[object Object]'){
        Object.keys(element).forEach(key=>{
          // console.log('key',key)
          if(key!=='__proto__'){
            obj[key] = element[key]
          }
        })
        Object.getOwnPropertySymbols(element).forEach(symbol=>{
          obj[symbol] = element[symbol]
        })
    }else{
      obj[index] = element
    }
  });

  return obj
}

// MyAssign({},{ a: 0 , b: { c: 0}})

// MyAssign({ a: 1 },{ b: 2 })

// 同名属性会被覆盖
// MyAssign({ a: 1, b: 1, c: 1 },{ b: 2, c: 2 }, { c: 3 })
// { a: 1, b: 2, c: 3 }

// symbol
// MyAssign({},{ [Symbol('foo')]: 2 })
// Object.getOwnPropertySymbols

// 基础类型会增加key
// MyAssign("abc",true)

// 不可枚举和__proto__不会处理
// const obj = Object.create({foo: 1}, { // foo 是个继承属性。
//   bar: {
//       value: 2  // bar 是个不可枚举属性。
//   },
//   baz: {
//       value: 3,
//       enumerable: true  // baz 是个自身可枚举属性。
//   }
// });
// MyAssign({},obj)

// 访问器
// MyAssign({},{
//   foo: 1,
//   get bar() {
//     return 2;
//   }
// })