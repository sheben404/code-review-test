// 一些不规范的 JavaScript 代码示例
var a = 1;  // 使用 var 而不是 let/const
var b = 2

function dosomething(x,y) {  // 函数名不符合驼峰命名规范，参数之间没有空格
    if(x>y){  // 运算符两边没有空格
    return x  // 缺少分号
    }
    else{  // else 的位置不规范
        console.log("test")  // 缺少分号
    }
}

// 全局变量污染
globalVar = "I am a bad practice"

// 魔术数字
function calculateTotal(items) {
    return items * 1.08 * 1.1  // 直接使用魔术数字，没有注释说明
}

// 嵌套过深
function deepNesting(arr) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]) {
            if(arr[i].value) {
                if(arr[i].value.data) {
                    return arr[i].value.data
                }
            }
        }
    }
}

// 混合使用单引号和双引号
let str1 = 'hello'
let str2 = "world"

// 不一致的缩进
function inconsistentIndentation() {
  const a = 1;
    const b = 2;
        return a + b;
}