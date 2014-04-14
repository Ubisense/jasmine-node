var runner = require('./lib/jasmine-node/runner.js');
var loader = require('./lib/jasmine-node/jasmine-loader.js');
exports.run = runner.runSpecs;
exports.load = loader.loadJasmine;
exports.defaults = runner.defaults;
