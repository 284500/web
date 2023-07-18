补充知识：构造函数创建一个实例的过程
1.创建一个新对象
2.将构造函数的作用域赋值给新对象（这样this就指向了新对象）
3.执行构造函数中的代码（为新对象添加实例属性和实例方法）
返回新对象


原型对象

JS的每个函数在创建的时候，都会生成一个属性prototype，这个属性指向一个对象，这个对象就是此函数的原型对象。
该原型对象中有个属性为constructor，指向该函数。这样原型对象和它的函数之间就产生了联系。

原型链

既然有了构造函数，那么就可以通过该构造函数，来创建一个实例对象了。此时，完善一下我们的Preson构造函数
    // 构造函数
    function Preson(name, age) {
      this.name = name;
      this.age = age;
    }
    // 所有实例共享的公共方法
    Preson.prototype.say = function (word) {
      console.log(`${this.name}说：${word}`);
    }

    const p1 = new Preson('张三', 18); // 创建一个Person实例对象
    p1.hasOwnProperty('say') // false 说明不是定义在其本身上的
    p1.say('hello world'); // 调用公共方法 打印：张三说：hello world

_proto_
每个通过构造函数创建出来的实例对象，其本身有个属性__proto__，这个属性会指向该实例对象的构造函数的原型对象

Person.prototype=p.__proto__

原型链
  
函数对象-->object-->object原型-->null