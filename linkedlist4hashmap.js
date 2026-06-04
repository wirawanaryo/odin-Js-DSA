class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(data) {
    this.firstNode = null;    
    this.numNodes = 0;
  }
  
  append(data) {
    if(this.firstNode === null){
      this.firstNode = new Node(data);
      this.numNodes++
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
    let temp = this.firstNode;
    this.firstNode = new Node(data);
    this.head.next = temp;
    this.numNodes++
  }
  
  pop() {
    let temp = this.firstNode;
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
    let temp = this.firstNode;
    if (temp === null) {
      return undefined
    }    
    while (temp.next !== null) {  
      temp = temp.next;    
    };
    return temp
  }
  
  at(index) {
    let temp = this.firstNode;
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
  
  contains(key) {
    let status = false
    if (this.firstNode === null ) {
      return status
    } 
    let temp = this.firstNode;
    let cur = 0;   

    while (temp !== null) {        
      if (temp.data[0]===key) {
        status = true;
        return status;
      }
      temp = temp.next;    
    };
    return status
  }

  findbyKey(key) {
    let temp = this.firstNode;
    let cur = 0;    
    if (temp === null ) {
      return temp
    }    
    while (temp !== null) {        
      if (temp.data[0]===key) {        
        return temp;
      }
      temp = temp.next;    
    };
    return temp
  }

  removebyKey(key){
    let temp = this.firstNode;
    if (temp.data[0]===key) {
      temp = temp.next
      this.firstNode = temp
      return;
    }

    let before = null;
    while (temp !== null) {        
      if (temp.data[0]===key) {        
        break;
      }       
      before =  temp;
      temp = temp.next; 
    };
    before.next = temp.next
    temp.next = null;
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



export {linkedList};


