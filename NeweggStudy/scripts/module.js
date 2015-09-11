/*
var jobs = new Person('jobs');

var jobs = {};
jobs.__proto = Person.prototype;
Person.Call(jobs, 'jobs');

*/

module.exports = function(obj){
  var res =() => {};

  if(typeof(obj) && obj){
    for (var variable in obj) {
      if (obj.hasOwnProperty(variable)) {
        res.prototype[variable] = obj[variable];
      }
    }
  }
  return res;
};

// module.exports = function(obj){
//   if(!(typeof(obj) && obj)){
//     obj = function(){};
//   }
//   class res extends obj{
//
//   };
//
//   return res;
// };

class ClassA{
  constructor(){
    console.log("ClassA");
    for (var variable in arguments[0]) {
      console.log("!!!");
      console.log(variable);
      this[variable] = arguments[variable];
    }
    console.log(this);
    console.log("***");

  }

  extend(){
    return new ClassB(this);
  }
}

class ClassB extends ClassA{
  constructor(){
    console.log("ClassB");
    super(arguments[0]);
  }
}

module.exports = ClassA;
