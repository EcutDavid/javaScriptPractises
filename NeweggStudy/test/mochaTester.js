import assert from 'assert';
import should from 'should';

import Class from '../scripts/module.js';

describe('test Class', function(){
  it('should have inheritis', function(){

    let Person = new Class({
      say: function(){}
    });
    Person.should.be.have.properties(['say']);

    let Man = Person.extend({
      work: function(){}
    });

    let jobs = new Man();
    jobs.should.be.have.properties(['say', 'work']);
  });
});
