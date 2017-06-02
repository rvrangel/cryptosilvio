module.exports = [{
  action: 'hear',
  trigger: /\bn[aã]o cons(igo|egue)\b/i,
  replies: ['não consegue né, Moisés']
},{
  action: 'hear',
  trigger: /\b(escolh[o|i]|decidiu?|vou comprar|vou vender)\b/i,
  replies: ['Está certo disso?']
},{
  action: 'respond',
  trigger: /.*\b(obrigad[o|a]|valeu)\b/i,
  replies: [
    'de nada',
    'pode crer',
    'no problem',
    'tranqs'
  ]
}];