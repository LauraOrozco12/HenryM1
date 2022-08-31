'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<2) return array;
  if(array.length>1){
    var pivot = array[Math.floor(array.length/2)]
    var left=[];
    var right=[];
    var arrPivot=[];
    for(let i=0;i<array.length;i++){
      if(array[i]<pivot){
        left.push(array[i])
      }
      if(array[i]>pivot){
        right.push(array[i])
      }
      if(array[i]===pivot){
        arrPivot.push(array[i])
      }
    }
  }
  return quickSort(left).concat(arrPivot,quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<2) return array;
  if(array.length>1){
    var pivot = Math.floor(array.length/2)
    var left = array.slice(0, pivot);
    var right = array.slice(pivot);
  }
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var arrOrd=[]
  while (left.length>0 && right.length>0){
    if(left[0]<right[0]){
      arrOrd.push(left.shift());
    } else {
      arrOrd.push(right.shift());
    }
  }
  return arrOrd.concat(left,right);
}

mergeSort([4,9,1,3,2])
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
