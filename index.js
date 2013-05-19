var net = require('net')

var Parser = require('imap-parser')

net.createServer(function (connection) {
  function write(str) {
    console.log('S: ' + JSON.stringify(str))
    connection.write(str + '\r\n')
  }
  connection
    .pipe(new Parser())
    .on('data', function (data) {
      function done(status, message) {
        write(data[0] + ' ' + (status || 'OK') + ' ' + data[1] + ' ' + (message || 'completed'))
      }
      var command = data[1].toUpperCase()
      switch (command) {
        case 'CAPABILITY':
          write('* CAPABILITY IMAP4rev1')
          done()
          break
        case 'LOGIN':
          var user = data[2]
          var pass = data[3]
          console.log('login(' + JSON.stringify(user) + ', ' + JSON.stringify(pass) + ')')
          done()
          break
        case 'LOGOUT':
          write('* BYE')
          done()
          break
        case 'LSUB':
          done()
        default:
          console.dir(data)
          break
      }
    })
    .on('log', function (data) {
      console.log('C: ' + JSON.stringify(data))
    })
  write('* OK IMAP4rev1 Service Ready')
  connection.on('end', function () {
    console.log('CLOSED')
  })
}).listen(143)