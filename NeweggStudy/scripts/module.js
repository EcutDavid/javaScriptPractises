class ClassA{
  constructor(){
    for (var variable in arguments[0]) {
      console.log(variable);
      this[variable] = arguments[variable];
    }
  }

  extend(){
    function classB(){};
    for (var variable in this) {
      if (object.hasOwnProperty(variable)) {
        classB.prototype.variable = this.variable;
      }
    }
    console.log(typeof(classB));
    return classB;
  }
}



export default ClassA;
