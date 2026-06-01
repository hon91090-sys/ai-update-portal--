const handler = require('../server.js');

module.exports = async (req, res) => {
  // Pass control to the unified server handler
  return handler(req, res);
};
