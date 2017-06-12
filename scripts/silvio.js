var data = require('../data');

module.exports = function(robot) {
  var defaultData = {
    username: 'Crypto Silvio',
    icon_url: 'http://i.imgur.com/KKtEayV.jpg',
    as_user: false,
    unfurl_media: true
  };
  
  function sendMessage(msg, r_text) {
    var messageData = defaultData
    messageData.channel = msg.message.room
    messageData.text = r_text
    msg.send(messageData)
  }

  data.forEach(function(d) {
    robot[d.action](d.trigger, function(msg) {
      sendMessage(msg, msg.random(d.replies));
    })
  });
}
