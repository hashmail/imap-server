# imap-server

An IMAP server in node.js

This project is a work in progress and is just starting.  The long term goal is to implement [RFC3501](http://tools.ietf.org/html/rfc3501) in all its glory.

The current status is that it's a proof of concept good enough to pass Mozilla Thunderbird's checks as a valid IMAP server.  It won't actually send any messages yet.

## Prior Art

There are many implementations in other high level languages on GitHub, mostly incomplete.

 - [dirk/go-imap](https://github.com/dirk/go-imap/blob/master/imap.go) - language: go
 - [pasha010/imap4-server](https://github.com/pasha010/imap4-server/tree/master/src/net/imap4) - language: Java
 - [defunct/depot](https://github.com/defunct/depot/tree/master/src/main/java/com/goodworkalan/depot) - language: Java
 - [aox/aox](https://github.com/aox/aox) - language: C++

There is also an IMAP command parser extracted from [inbox](https://github.com/andris9/inbox) by [@andris9](https://github.com/andris9)

 - [imap-parser](https://github.com/hashmail/imap-parser)

## Contributing

At this stage, open an issue and I'll add you to the contributors team so we can get started.

## License

MIT
