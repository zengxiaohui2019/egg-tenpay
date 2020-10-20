'use strict';
const tenpay = require('tenpay');

const createWeapy = async (config) => {
  if(config.sandbox) {
    return await tenpay.sandbox(config, !!config.sandbox);
  } else {
    return new tenpay(config, !!config.sandbox);
  }
};

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  async didLoad() {
    this.app.addSingleton('tenpay', createWeapy);
  }
}
module.exports = AppBootHook;
