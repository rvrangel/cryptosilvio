module.exports = function(robot) {

  var defaultData = {
          username: 'Crypto Silvio',
          icon_url: 'http://i.imgur.com/KKtEayV.jpg',
          as_user: false
        }
  
  function sendMessage(msg, r_text) {
    var messageData = defaultData
    messageData.channel = msg.message.room
    messageData.text = r_text
    msg.send(messageData)
  }

  robot.hear(/\bn[aã]o cons(igo|egue)\b/i, function(msg) {
    var r_text = 'não consegue né, Moisés'
    var messageData = defaultData
    messageData.channel = msg.message.room
    messageData.text = r_text
    msg.send(messageData)
  })
  
  robot.respond(/.*\b(obrigad[o|a]|valeu)\b/i, function(msg) {
    replies = [
      'de nada',
      'pode crer',
      'no problem',
      'tranqs'
    ]
    sendMessage(msg, msg.random(replies))
  })

}
