const supertest = require('supertest');
const {_app} = require('../src/api');
const {expect} = require('chai');
describe('GET: /', function () {
  it('should send message in response', () => {
    supertest(_app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.text).equal('Simple node-app server ever!')
      });
  });
});