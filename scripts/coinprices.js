module.exports = function(robot) {

  interjections = [
    "mah oe!",
    "hahae"
  ]

  function getBTCUSDPrice(callback) {
    robot.http("http://preev.com/pulse/units:btc+usd/sources:bitfinex+bitstamp+btce").get()(function(err, response, body) {
      var prices = JSON.parse(body)
      var total = 0
      var count = 0
      for (price in prices.btc.usd) {
        total += parseFloat(prices.btc.usd[price].last)
        count += 1
      }
      var avgprice = total / count
      callback(avgprice.toFixed(2))
    })
  }
  
  function getBTCBRLPrice(callback) {
    robot.http("https://www.mercadobitcoin.net/api/ticker/").get()(function(err, response, body) {
      var prices = JSON.parse(body)
      var lastPrice = parseFloat(prices.ticker.last)
      callback(lastPrice.toFixed(2))
    })
  }
  
  robot.respond(/.*\b(valor|pre[cç]o)( dos?)? (btc|bitcoin)\b/i, function(msg) {
  
    getBTCUSDPrice(function(usdPrice) {
      getBTCBRLPrice(function(brlPrice) {
      
        r_text = 'o valor do BTC é U$ ' + usdPrice + 
                 ' (R$ ' + brlPrice + '). ' + msg.random(interjections)
                 
        messageData = {
          channel: msg.message.room,
          username: 'Crypto Silvio',
          icon_url: 'http://i.imgur.com/KKtEayV.jpg',
          text: r_text,
          as_user: false
        }
        
        msg.send(messageData)
      })
    }) 
  })

}
