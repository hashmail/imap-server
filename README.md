# imap-server

An IMAP server in node.js

This project is a work in progress and is just starting.  The long term goal is to implement [RFC3501](http://tools.ietf.org/html/rfc3501) in all its glory.

The current status is that it's a proof of concept good enough to pass Mozilla Thunderbird's checks as a valid IMAP server.  It won't actually send any messages yet.

## Prior Art

There are many implementations in other high level languages on GitHub, mostly incomplete.

 - [xpensia/ImapServer](https://github.com/xpensia/ImapServer) - language: JavaScript
 - [dirk/go-imap](https://github.com/dirk/go-imap/blob/master/imap.go) - language: go
 - [pasha010/imap4-server](https://github.com/pasha010/imap4-server/tree/master/src/net/imap4) - language: Java
 - [defunct/depot](https://github.com/defunct/depot/tree/master/src/main/java/com/goodworkalan/depot) - language: Java
 - [aox/aox](https://github.com/aox/aox) - language: C++

There is also an IMAP command parser extracted from [inbox](https://github.com/andris9/inbox) by [@andris9](https://github.com/andris9)

 - [imap-parser](https://github.com/hashmail/imap-parser)

## Contributing

At this stage, open an issue and I'll add you to the contributors team so we can get started.

## Planned API

The plan is to try and make it really simple to set up an IMAP server.  They key is that we want an API that is protocol agnostic so that an identical API can be implemented for POP3.  It's very much a work in progress, so don't expect it to stay the same.

```javascript
var fs = require('fs');
var imap = require('imap-server')

// SSL
var certs = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
};

// IMAP server

var server = imap({options})

server.authenticate(function (username, password, callback) {
  //authenticate user and either call callback with error as first arg or 'e-mail address' of user as second arg.
})

server.mailBoxes(function (email, queryArgs, callback) {
  //return a list of the users mail boxes
})

server.mailItems(function (email, queryArgs, callback) {
  //return a list of the users mail items
})

server.addMailItem(function (email, mailItem, callback) {
  //write the mail message to the database
})
server.updateMailItem(function (email, mailItem, callback) {
  //write the mail message to the database
})

db.on('message', function (message) {
  //push messages to clients that support some kind of push type protocol
  server.push(message.email, message.body)
})

// port 143
var net = require('net')
net.createServer(server).listen(process.env.IMAP_PORT || 143)
// port 993
var tls = require('tls')
tls.createServer(certs, server).listen(process.env.IMAPS_PORT || 993)
```

TODO: plugin architecture for the future

## License

MIT
