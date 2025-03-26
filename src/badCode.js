/**
 * 这是一个展示 JavaScript 代码规范的示例文件
 * 修复了之前代码中的各种问题
 */

// 使用命名常量替代魔术数字
const TAX_RATE = 1.08;
const SERVICE_FEE_RATE = 1.1;

// 使用 const 声明不会被重新赋值的变量
const firstNumber = 1;
const secondNumber = 2;

/**
 * 比较两个数字并返回较大值
 * @param {number} x - 第一个数字
 * @param {number} y - 第二个数字
 * @returns {number} 较大的数字
 */
function compareNumbers(x, y) {
  if (x > y) {
    return x;
  } else {
    console.log('Second number is larger or equal');
    return y;
  }
}

// 使用模块作用域变量替代全局变量
const config = {
  environment: 'development',
  feature: 'code-review-example'
};

/**
 * 计算含税和服务费的总价
 * @param {number} items - 原始价格
 * @returns {number} 最终价格
 */
function calculateTotal(items) {
  return items * TAX_RATE * SERVICE_FEE_RATE;
}

/**
 * 使用可选链和提前返回模式优化深层嵌套
 * @param {Array} arr - 输入数组
 * @returns {*} 数据或 null
 */
function getNestedData(arr) {
  if (!arr?.value?.data) {
    return null;
  }
  return arr.value.data;
}

// 统一使用单引号
const greeting = {
  hello: 'hello',
  world: 'world'
};

/**
 * 使用一致的缩进（2空格）
 * @returns {number} 计算结果
 */
function calculateSum() {
  const a = 1;
  const b = 2;
  return a + b;
}