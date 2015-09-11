//debugger;

function foo(){
  console.log('I am function');
}

var foo1 = function(){
  console.log('I am function too');
}

var foo2 = new Function("console.log('I am function too')");

foo();
foo1();
foo2();

function $(itemSelector){
  var res = {
    dom : document.querySelector(itemSelector),
    hide : function(){ res.dom.style.display = 'none';},
    show : function(){ res.dom.style.display = '';}
  };
  return res;
};

var Person = function(name){
  this.name = name;
}

Person.prototype = {
    say: function(){
    console.log(this.name);
  }
}

var jobs = new Person('jobs');

console.log(jobs.name);
jobs.say();

//apply call
function gloFoo(name){
  this.name = name;
}

gloFoo('gloTester');

var o = {
  setName: foo
};

o.setName('oTester');

//equal to o.setName('oTester');
foo.call(o, 'oTester');
foo.apply(o, ['oTester']);
