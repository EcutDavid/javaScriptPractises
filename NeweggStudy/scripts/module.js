class ClassA{
  constructor(){
    for (var variable in arguments[0]) {
      this[variable] = arguments[0][variable];
    }
  }

  extend(){
    class classB{}

    for (let variable in this) {
      classB.prototype[variable] = this.variable;
    }

    for (let variable in arguments[0]) {
      classB.prototype[variable] = arguments[0][variable];
    }
    return classB;
  }
}



export default ClassA;
