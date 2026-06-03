class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(data) {
    this.firstNode = new Node(data);
    this.numNodes = 1;
  }

  append(data) {
    if (this.firstNode === null) {
      this.firstNode = new Node(data);
    } else {
      const newNode = new Node(data);
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
      this.numNodes++
    }
  }

  prepend(data) {
    let temp = this.head;
    this.firstNode = new Node(data);
    this.head.next = temp;
    this.numNodes++
  }

  get head() {
    if (this.firstNode !== null) {
      return this.firstNode;
    } else {
      return undefined
    }    
  }

  tail() {
    let temp = newList.head
    if (temp === null) {
      return undefined
    }    
    while (temp.next !== null) {  
      temp = temp.next;    
    };
    return temp
  }

  at(index) {
    let temp = newList.head;
    let cur = 0;
    if (temp === null || index > this.numNodes-1 || index < 0 ) {
      return undefined
    }    
    while (temp.next !== null && cur < index) {  
      temp = temp.next;    
      cur++;
    };
    return temp.data
  }

  pop() {
    let temp = this.head;
    this.firstNode = this.firstNode.next;
    this.numNodes--;
    return temp.data;
  }

  contains(value) {
    let temp = newList.head;    
    let status = false
    if (temp === null ) {
      return undefined
    }    
    while (temp !== null) {        
      if (temp.data===value) {
        status = true;
        break;
      }
      temp = temp.next;    
    };
    return status
  }

  findIndex(value) {
    let temp = newList.head;
    let cur = 0;
    if (temp === null ) {
      return undefined
    }    
    while (temp !== null) {        
      if (temp.data===value) {
        break;
      }
      temp = temp.next; 
      cur++
    };
    
    return (cur<this.numNodes) ? cur : undefined;
  }

  toString() {
    let temp = newList.head;
    let text = ''
    if (temp === null ) {
      return arr
    }    
    // ( value ) -> ( value ) -> ( value ) -> null
    while (temp !== null) { 
      text+=`(${temp.data}) -> `  
      temp = temp.next; 
    };
    return text+'null'
  }

}

const newList = new linkedList('oldfirstNode');
newList.append('oldsecondNode')
newList.prepend('newfirstNode')
newList.prepend('newnewfirstNode')

console.log(newList.tail().data)
console.log(newList.findIndex('oldfirstNode'))
console.log(newList.toString())
console.log(newList.pop())
console.log(newList.toString())
