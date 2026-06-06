// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);    
    if (sorted.length === 0) return null;

    const mid = Math.floor(sorted.length / 2);
    const root = new Node(sorted[mid]);

    root.left = this.buildTree(sorted.slice(0, mid));
    root.right = this.buildTree(sorted.slice(mid + 1));

    return root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {

      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  includes(value) {
    // const arr = []
    // function GetInorder(node) {
    //   if (node !== null) {
    //     GetInorder(node.left);
    //     arr.push(node.data);
    //     GetInorder(node.right);
    //   }
    // };
    // GetInorder(this.root);
    // return arr.includes(value) ? true : false;
    let res = false
    this.levelOrderForEach((data) => {
      if (data === value) {
        res = true
      }
    })

    return res
  }

  deleteItem(value) {
    this.root = this.removeNode(this.root, value);
  }

  findMinNode(node) {
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // leaf
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children      
      const aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }

  }

  levelOrderForEach(callback) {
    if (!callback) {
      throw new Error('Must Add a Callback!');
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      callback(current.data);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  inOrderForEach(callback) {
    if (!callback) {
      throw new Error('Must Add a Callback!');
    }

    const inOrder = (node) => {
      if (node === null) {
        return;
      }
      inOrder(node.left);
      callback(node.data)
      inOrder(node.right);
    }

    inOrder(this.root);
  };

  preOrderForEach(callback) {
    if (!callback) {
      throw new Error('Must Add a Callback!');
    }

    const preOrder = (node) => {
      if (node === null) {
        return;
      }
      callback(node.data);
      preOrder(node.left);
      preOrder(node.right);
    }

    preOrder(this.root);
  };

  postOrderForEach(callback) {
    if (!callback) {
      throw new Error('Must Add a Callback!');
    }

    const postOrder = (node) => {
      if (node === null) {
        return;
      }
      postOrder(node.left);
      postOrder(node.right);
      callback(node.data);
    }

    postOrder(this.root);
  };

  height(value) {
    const queue = [this.root];

    const heightCounter = (node) => {
      if (node === null) return 0;
      return 1 + Math.max(heightCounter(node.left), heightCounter(node.right));
    };

    while (queue.length > 0) {
      const current = queue.shift();

      if (current.data === value) {
        return heightCounter(current) - 1;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return undefined;
  }

  depth(value) {
    if (!this.root) return undefined;
    const queue = [[this.root, 0]];

    while (queue.length) {
      const [node, depth] = queue.shift();
      if (node.data === value) {
        return depth;
      }
      if (node.left) {
        queue.push([node.left, depth + 1]);
      }
      if (node.right) {
        queue.push([node.right, depth + 1]);
      }
    }
    return undefined;
  }

  isBalanced() {
    
    // const heightCounter = (node) => {
    //   if (node === null) return 0;
    //   return 1 + Math.max(heightCounter(node.left), heightCounter(node.right));
    // };
    // const checker = (node) => {
    //   if (node === null) return true;
    //   const lHeight = heightCounter(node.left);
    //   const rHeight = heightCounter(node.right);
    //   if (Math.abs(lHeight - rHeight) > 1) return false;
    //   return checker(node.left) && checker(node.right);
    // }
    // return checker(this.root);
    const check = (node) => {
      if (node === null) return 0;

      const left = check(node.left);
      if (left === -1) return -1;

      const right = check(node.right);
      if (right === -1) return -1;

      if (Math.abs(left - right) > 1) return -1;

      return 1 + Math.max(left, right);
    };

    return check(this.root) !== -1;
  }

  reBalanced(){
    const newArr = []
    this.inOrderForEach((value)=>{
      newArr.push(value);
    })

    this.root = this.buildTree(newArr);
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

const test = new Tree([1, 7,4,2,23])
prettyPrint(test.root)
test.deleteItem(7)
test.deleteItem(23)
prettyPrint(test.root)
console.log(test.isBalanced())
test.reBalanced()
prettyPrint(test.root)
console.log(test.isBalanced())




