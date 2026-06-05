import { linkedList } from "./linkedlist4hashmap.js";

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
    } else {
      this.buckets[index].append([key, value]);
    }
    // this.buckets[index].append([key,value])  
  }

  get(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return null
    }
    const node = this.buckets[index].findbyKey(key);

    return node !== null ? node.data[1] : null;
  }

  has(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return false
    }
    const node = this.buckets[index].findbyKey(key);

    return node !== null ? true : false;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.has(key)) {
      return false
    } else {
      this.buckets[index].removebyKey(key);
      return true;
    }
  }

  length() {
    let jumlahValid = 0;
    this.buckets.forEach((bucket) => {
      if (bucket.numNodes > 0) {
        jumlahValid+=bucket.numNodes;
      }      
    });
    return jumlahValid;
  }

  clear(){
    this.buckets = new Array(this.capacity);
  }

  keys(){
    const arr = []
    this.buckets.forEach((bucket) => {
      if (bucket.numNodes > 0) {
        bucket.getAllDatas().forEach((pair)=>{
          arr.push(pair[0])
        })
      }      
    });
    return arr
  }

  values(){
    const arr = []
    this.buckets.forEach((bucket) => {
      if (bucket.numNodes > 0) {
        bucket.getAllDatas().forEach((pair)=>{
          arr.push(pair[1])
        })
      }      
    });
    return arr
  }

  entries(){
    const arr = []
    this.buckets.forEach((bucket) => {
      if (bucket.numNodes > 0) {
        bucket.getAllDatas().forEach((pair)=>{
          arr.push(pair)
        })
      }      
    });
    return arr
  }

}

// const hm = new HashMap();
// hm.set('apple', 'red')
// hm.set('apple', 'purple')
// hm.set('banana', 'yellow')
// hm.set('orange', 'orange')
// // hm.remove('orange')
// console.log(hm.get('orange'))
// console.log(hm.buckets)
// console.log(hm.length())
// console.log(hm.keys())
// console.log(hm.values())
// console.log(hm.entries())

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.keys())
console.log(test.values())



