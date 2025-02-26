'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/seed',
      handler: 'seed.seed',
      config: {
        policies: [],
        auth: false
      }
    }
  ]
}; 