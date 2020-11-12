const Logr = require('logr');
const log = Logr.createLogger({
  reporters: {
    bell: {
      reporter: require('..')
    }
  }
});

log('hi');
log(['error'], 'bell');
