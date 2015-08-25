// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

var get = require('./routes/get');
var postForm = require('./routes/postForm');

var rOption = {
  flags : 'r',
  encoding : null,
  mode : 0666
}
//var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/get', get);
app.use('/postForm', postForm);

var num = 11;

io.on('connection', function (socket) {

  // 构造客户端对象
  var client = {
    socket: socket,
    username: '',
    color: ''
  }

  //socket.emit('open');//通知客户端已连接

  // 打印握手信息
  //console.log(socket.handshake);

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    // we store the username in the socket session for this client
    client.username = username;
    socket.broadcast.emit('add user', {num: num++});
  });
});

app.get('/getJson', function(req, res) { 
    res.send('Get Over');    
});   

app.post('/upload', function(req, res){
  /*var stream = fs.createReadStream('data.js',rOption);
  stream.pipe(res);*/
  var o = {};
    o.department = req.body.department;
    o.member = req.body.member;

  console.log(o);
  
  
  verifyData(o);
  res.send({status:"OK",msg:"上传成功"});
});

function readData(callback){
  
  fs.readFile("data.json","utf-8",function(err,getdata){
    if(err) throw err;
    var data = JSON.parse(getdata);
    console.log(getData);
    callback(data)
  });
}

/*function getData(data){
  var jsonData = data;
  console.log(jsonData+"!!");
  return jsonData;
}*/

function verifyData(postData){
  
  console.log("in verifyData");
  fs.readFile("data.json","utf-8",function(err,getdata){
    if(err) throw err;
    var data = JSON.parse(getdata);
    var department = postData.department;
    var member = postData.member;
    
    var isMemberFound = false;
    var isdepartmentFound = false;
    for(var i=0,tl = data.list.length;i<tl;i++){
      if(data.list[i].department.match(department)){
        //console.log(data.list[i].department.match(department) + "      line:86");
        isdepartmentFound = true;
        var ml = data.list[i].member.length;
        //console.log(ml);
        //遍历部门内member列表
        for(var j=0;j<ml;j++){
          //console.log("in member list >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
          if(data.list[i].member[j].name == member){
            isMemberFound = true;
          }
          //console.log((data.list[i].member[j].name == member) + "   line:92");
        }
        if(!isMemberFound){
          var _new = {};
          _new.name = member;
          _new.id = data.list[i].id + "_" + (data.list[i].member.length + 1);
          data.list[i].member.push(_new);
          //console.log(JSON.stringify(data));
        }
      }
    }
    console.log(isdepartmentFound);
    console.log(isMemberFound);
    if(!isdepartmentFound){
      var _new = {};
      console.log(department)
      _new.department = department;
      _new.id = "qian_" + (data.list.length +1 );
      _new.member = [];
      _new.member.push({name:member,id:_new.id+"_1"});
      //console.log(_new);
      data.list.push(_new);
    }
    
    
    
    if(!isdepartmentFound||!isMemberFound){
      var stream = fs.createWriteStream('data.json','utf-8');
      stream.write(new Buffer(JSON.stringify(data)));
    }
  });
  
  
  /**/
}