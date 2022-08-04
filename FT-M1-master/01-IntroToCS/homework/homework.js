'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numArray = Array.from(num).reverse();
  let decimal = 0;
  for (let i=0;i<numArray.length;i++){
    decimal=decimal+(Math.pow(2,i)*numArray[i])
  }
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = ""
  while (num>0){
    binario=num%2+binario
    num=Math.floor(num/2)
  }
  return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}