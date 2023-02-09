/*

NOTE: THIS IS NOT THE ACTUAL SOURCE CODE!
IT'S JUST A SERVER THAT REDIRECTS TO THE GAME!

VIEW THE ACTUAL SOURCE CODE:
https://github.com/codergautam/swordbattle.io

THANK YOU!!!
*/

const http = require("http")
const server = http.createServer(function (req, res) {
    // do a 302 redirect
    res.writeHead(302, {
      location: "https://sword-io-game.herokuapp.com",
    });
    res.end();
  
}).listen(8080);