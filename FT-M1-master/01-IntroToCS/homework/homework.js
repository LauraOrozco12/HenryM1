'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numArray = Array.from(num);
  var numArrayReverse = numArray.reverse();
  let decimal = 0
  for (let i=0;i<numArrayReverse.length;i++){
    decimal=decimal+(Math.pow(2,i)*numArrayReverse[i])
  }
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = ""
  for (;num>0;){
    binario=num%2+binario
    num=Math.floor(num/2)
  }
  return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}