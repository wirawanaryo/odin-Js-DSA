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
    if(this.firstNode === null){
      this.firstNode = new Node(data);
    }else{
      const newNode = new Node(data);
      let temp = this.head;
      while(temp.next !== null){
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
  
  pop() {
    let temp = this.head
    this.firstNode = this.firstNode.next
    this.numNodes--
    return temp.data
  }
  
  get head() {
    if (this.firstNode !== null) {
      return this.firstNode;
    } else {
      return undefined
    }    
  }
  
  tail() {
    let temp = this.head
    if (temp === null) {
      return undefined
    }    
    while (temp.next !== null) {  
      temp = temp.next;    
    };
    return temp
  }
  
  at(index) {
    let temp = this.head;
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
  
  contains(value) {
    let temp = this.head;
    let cur = 0;
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
    let temp = this.head;
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
    // if(cur>=this.numNodes) return cur
  }
  
  toString() {
    let temp = this.head;
    let text = ''
    if (temp === null ) {
      return text
    }    
    // ( value ) -> ( value ) -> ( value ) -> null
    while (temp !== null) { 
      text+=`(${temp.data}) -> `  
      temp = temp.next; 
    };
    return text+'null' 
  }
}

const list = new linkedList("dog");

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString())




