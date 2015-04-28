module.exports = function (robot) {
  robot.hear(/.*/i,function (res) {
      res.send("Hodor !!!");
  });
  robot.hear(/khaleesi (.*)/i,function (res) {
    var match = res.match[1];
    res.send('http://www.lesinrocks.com/wp-content/uploads/2014/09/hodor.jpg?v='+match);
  });
};
