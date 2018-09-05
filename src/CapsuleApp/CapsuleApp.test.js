const { createStore } = require('redux');
const TrelloApp = require('.');
const should = require('chai').should();
const deepFreeze = require('deep-freeze');
 
describe('CapsuleApp unit testing', function() {
 
  it('should SET_USERNAME', function() {

    const currState = {
        username: ''
    };

    const store = createStore(CapsuleApp, currState);

    const action = {
      type: 'GET_USERNAME',
      username : 'pramith'
    };

    store.dispatch(action);
 
    store.getState().should.have.property('username');
    store.getState().username.equal('pramith');
  });
});
 