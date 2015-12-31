'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var fs = require('fs');
var server = require('./server.js');

describe('basic TCP logging server', () => {
  //it('should receive tcp requests', (done) => {
    //chai.request('localhost:3000')
    //.get('/')
    //.then() => {
      //can't figure out what to test
    //})
    //.end ( (err, res) => {
      //console.log(res);
      //expect(res./*something*/).to.eql(/*something*/);
      //done();
  //})
  //});
  it('should create a file in log directory', (done) => {
    server;
    fs.readdir('./logs', (err, files) => {
      console.log(files);
      expect(files.length).to.eql(20);
    })
    done();
  });
});
