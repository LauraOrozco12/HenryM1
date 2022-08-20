"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size=function(){
  let contador = 1;
  if (this.right){
    contador+= this.right.size();
  }
  if (this.left){
    contador += this.left.size();
  }
  return contador;
}

BinarySearchTree.prototype.insert=function(value){
  let node = new BinarySearchTree(value);
  if (value>this.value){
    if (!this.right){
      this.right=node;
    } else {
      this.right.insert(value);
    }
  }
  if (value<this.value){
    if (!this.left){
      this.left=node;
    } else {
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains=function(value){
  if(value===this.value){
    return true;
  }
  if (value>this.value){
    if (!this.right){
      return false;
      }
      else {return this.right.contains(value);}
  }
  if (value<this.value){
    if (!this.left){
    return false;   
    } 
    else {return this.left.contains(value);}
  }
}

BinarySearchTree.prototype.depthFirstForEach=function(f,dfs){ 
  if( !dfs || dfs==='in-order'){
    if(this.left){
      this.left.depthFirstForEach(f,dfs);
    }
    f(this.value);
    if (this.right){
      this.right.depthFirstForEach(f,dfs);
    }
  }
  if(dfs==="post-order"){
    if(this.left){
      this.left.depthFirstForEach(f,dfs);
    }
    if(this.right){
      this.right.depthFirstForEach(f,dfs);
    }
    f(this.value);
  }
  if(dfs==="pre-order"){
    f(this.value);
    if (this.left){
      this.left.depthFirstForEach(f,dfs);
    }
    if (this.right){
      this.right.depthFirstForEach(f,dfs);
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach=function(cb,arr=[]){
  
  cb(this.value);
  if(this.left){
    arr.push(this.left);
  }
  if(this.right){
    arr.push(this.right);
  }
  let n = arr.shift();
  if(n){
    n.breadthFirstForEach(cb,arr);
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
