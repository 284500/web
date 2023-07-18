//在node里暴露
//需要暴露的模块
//module.exports本质是一个对象
exports.name = function() {
	console.log("函数是exports的成员函数")
} //moduleA.js

module.exports = function() {
	console.log("函数是module.exports本身")
} //moduleB.js

//main.js 这是引用部分

const A = require('./moduleA');
A.name(); //export

const B = require('./moduleB')
B();

//在vue里暴露

export function add() {

}

export default add() {

}

//在vue引用

import {
	add
} from './export'

import ADD from './exprot-default'