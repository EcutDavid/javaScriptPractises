import assert from 'assert';
import should from 'should';

import Class from '../scripts/module.js';

describe('test Class', function(){
  it('should have inheritis', function(){

    var Person = new Class({
      say: function(){}
    });
    Person.should.be.have.properties(['say']);

    var Man = Person.extend({
      work: function(){}
    });
    //
    //
    var jobs = new Man();
    jobs.should.be.have.properties(['say']);
    // jobs.should.be.have.properties(['work']);
  });
});
