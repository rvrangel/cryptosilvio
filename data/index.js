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
    'tranqs',
    'show'
  ]
},{
  action: 'respond',
  trigger: /.*\bcomprar\b.*\?/i,
  replies: [
    'se joga',
    'hmmmm, melhor não',
    'não vem querer comprar migalha',
    'só se for barras de ouro que valem mais do que dinheiro!',
    'COMPRA!!'
  ]
},{
  action: 'respond',
  trigger: /.*\bvender\b.*\?/i,
  replies: [
    'vender? jamais!!',
    'não quer pedir ajuda para os universitários?',
    'não deixo',
    'soca bala',
    'tu sabe que vai subir depois que tu vender né?'
  ]
},{
  action: 'hear',
  trigger: /\bperd(i|eu)\b.*\b(dinheiro|pilas?)\b/i,
  replies: ['<https://media.giphy.com/media/gUfc2d1J9o6go/giphy.gif>']
},{
  action: 'hear',
  trigger: /\bouro\b/i,
  replies: ['<https://media.giphy.com/media/wb6xgCSpLl0m4/giphy.gif>']
},{
  action: 'hear',
  trigger: /\bcaindo\b/i,
  replies: ['a pipa do vovô não sobe mais! hahae!']
}];
