class Bluebird extends Promise {}


require('./promiseFns/tap')(Bluebird);
require('./promiseFns/props')(Bluebird);
require('./promiseFns/spread')(Bluebird);
require('./promiseFns/promisify')(Bluebird);
require('./promiseFns/join')(Bluebird);
require('./promiseFns/try')(Bluebird);
require('./promiseFns/method')(Bluebird);
require('./promiseFns/each')(Bluebird);
require('./promiseFns/mapSeries')(Bluebird);
require('./promiseFns/map')(Bluebird);
require('./promiseFns/call')(Bluebird);
require('./promiseFns/finally')(Bluebird);

module.exports = Bluebird;

