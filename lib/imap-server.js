
module.exports = createServer
function createServer() {
  this.db = {}

  function createConnection(stream) {
    return new ImapConnection(createConnection, stream)
  }

  Object.keys(createServer.prototype)
    .forEach(function (key) {
      createConnection[key] = createServer.prototype[key]
    })
}

createServer.prototype.authenticate = function (fn) {
  this.db.authenticate = fn
}