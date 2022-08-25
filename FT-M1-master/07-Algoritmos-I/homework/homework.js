'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var primosArr=[2,3,5,7,11,13,11,19,23];
  var arr=[1];
  for(let i=0;i<primosArr.length;i++){
    while(num%primosArr[i]===0){
      arr.push(primosArr[i]);
      num=num/primosArr[i];
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // var arrOrg=[]
  // while(array.length>0){
  //   var num = array[0]
  //   for(let i=0;i<array.length;i++){
  //     if(num<=array[i]){
  //       num=array[i];
  //     }
    
  //   }
  // arrOrg.unshift(num);
  // array=array.filter(function(i) { return i !== num })
  // }
  // return arrOrg;
  for(let i =0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
      if(array[j]>array[j+1]){
        var num=array[j];
        array[j]=array[j+1];
        array[j+1]=num;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length;i++){
    for(let j=i;j>0;j--){
      if(array[j]<array[j-1]){
        let num=array[j]
        array.splice(j-1,0,num)
        array.splice(j+1,1)
      }
    }
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var arrOrd=[];
  while(array.length>0){
    var num=array[0];
    var pos=0;
    for(let i=0;i<array.length;i++){
      if(array[i]<num){
        num=array[i];
        pos=i;
      }
    }
    arrOrd.push(num);
    array.splice(pos,1);
  }
  return arrOrd;
    //   var num = array[0]
    //   for(let i=0;i<array.length;i++){
    //     if(num<=array[i]){
    //       num=array[i];
    //     }
      
    //   }
    // arrOrg.unshift(num);
    // array=array.filter(function(i) { return i !== num })
    // }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
