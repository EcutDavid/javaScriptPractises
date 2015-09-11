var assert = require('assert');
var should = require('should');

var Class = require('../scripts/module.js');

describe('test Class', function(){
  // it('should have a class', function(){
  //   var res = new Class();
  //   res.should.be.ok;
  // });
  //
  // it('should have method', function(){
  //   var Person = new Class({
  //     sayHello: function(){},
  //     show: function(){}
  //   });
  //
  //   var res = new Person();
  //   res.should.be.have.properties(['sayHello', 'show']);
  // });
  //
  // it('should have constructor', function(){
  //   var Person = new Class({
  //     initialize: function(name){
  //         this.name = name;
  //     }
  //   });
  //
  //   var jobs = new Person('jobs');
  //   console.log(jobs.name);
  //   jobs.name.should.eql('jobs');
  // });

  it('should have inheritis', function(){

    var Person = new Class({
      say: function(){}
    });

    var Man = Person.extend({
      work: function(){}
    });

    var jobs = new Man();
    console.log(jobs);
    jobs.should.be.have.properties(['say', 'work']);
  });
});
