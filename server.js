var servFunc = () => {

var net = require('net');
var fs = require('fs');
var uuid = require('uuid');
connectCounter = 0;
disconnectCounter = 0;

var server = net.createServer( (socket) => {
  console.log('client connected');

  var temp = uuid.v1('clockseq')
  //console.log(temp)
  var date = new Date();
  connectCounter++;
  fs.writeFile('./logs/' + temp + '.txt', "Server has been connected to " + connectCounter + "times"+'\n' + "connected on " + date, () => {
    console.log('data written');
  });

  socket.on('end', () => {
    server;
    console.log('client disconnected');
    socket.write({"test": "test2"});
  });
});

server.listen(3000, () => {
  console.log('server is alive on port 3000');
});

}//servFunc

servFunc();
module.export = servFunc
