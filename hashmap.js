import {linkedList} from "./linkedlist4hashmap.js";

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new linkedList();  
    }

    if (this.buckets[index].contains(key)) {
      const node = this.buckets[index].findbyKey(key); 
      node.data[1] = value; 
    }else{
      this.buckets[index].append([key,value]);
    }  
    // this.buckets[index].append([key,value])  
  }

  get(key) {
    const index = this.hash(key);
    
    if (!this.buckets[index]) {
      return 'key value pair doesnt exist'
    }
    const node = this.buckets[index].findbyKey(key);    
    
    return node !== null ? node.data[1] : 'the node is empty';
  }
}

const hm = new HashMap();
hm.set('apple', 'red')
console.log(hm.get('apple'))
hm.set('apple', 'purple')
hm.set('banana', 'yellow')

console.log(hm.get('apple'))
console.log(hm.get('banana'))
// console.log(hm.buckets[0].contains('apple'))
console.log(hm.buckets)