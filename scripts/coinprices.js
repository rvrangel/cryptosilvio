module.exports = function(robot) {

  interjections = [
    "mah oe!",
    "hahae"
  ]
  
  defaultData = {
    username: 'Crypto Silvio',
    icon_url: 'http://i.imgur.com/KKtEayV.jpg',
    as_user: false
  }

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
  
  function getAllCoinPrices(callback) {
    robot.http("https://api.coinmarketcap.com/v1/ticker/").get()(function(err, response, body) {
      var prices = JSON.parse(body)
      callback(prices)
    })
  }
  
  robot.respond(/.*\b(valor|pre[cç]o)( dos?)? bitcoin\b/i, function(msg) {
  
    getBTCUSDPrice(function(usdPrice) {
      getBTCBRLPrice(function(brlPrice) {
      
        r_text = 'o valor do BTC é U$ ' + usdPrice + 
                 ' (R$ ' + brlPrice + '). ' + msg.random(interjections)
                 
        messageData = defaultData
        messageData.channel = msg.message.room
        messageData.text = r_text
        
        msg.send(messageData)
      })
    }) 
  })
  
  robot.respond(/.*\b(valor|pre[cç]o|quanto).*\b([A-Z]{3,})\b/i, function(msg) {
    getAllCoinPrices(function (prices) {
      prices.forEach(function (coin) {
        if (msg.match[2].toUpperCase() == coin.symbol) {
          
          r_text = 'o valor do ' + coin.symbol + ' está em U$ '
            + coin.price_usd + ' ' + msg.random(interjections)
                     
          messageData = defaultData
          messageData.channel = msg.message.room
          messageData.text = r_text
          
          msg.send(messageData)
        }
      })
    })
  })

}
