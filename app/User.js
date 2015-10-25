
var chest = require('store-chest/src/store-chest');
console.log(chest);
chest.getTemp();
chest.set('test', 'clones from Git');
chest.reveal();



var User = (function() {

  // Private to User
  function init() {
    console.log('initing');
    return {
      name: '',
      password: ''
    }
  }

  // Exposed API to Interface with User
  return {
    init: init
  }

})();

module.exports = {
  createUser: User.init()
};
