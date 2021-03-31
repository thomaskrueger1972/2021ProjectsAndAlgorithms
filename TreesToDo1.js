class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    add(val) {
        let newNode = new BTNode(val)
        if (this.root) {
            let currentNode = this.root;
            while (currentNode) {
                if (newNode.val < currentNode.val) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = newNode;
                        currentNode = null;
                    }
                }   
                else if (newNode.val > currentNode.val) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } 
                    else {
                        currentNode.right = newNode;
                        currentNode = null;
                }
            }
                else {
                    newNode.left = currentNode.left;
                    newNode.right = currentNode.right;
                    currentNode.left = newNode;
                    currentNode.right = null;
                }
            }
        }
        else {  
            this.root = newNode;    
        }
        return this.root;
    }

    contains(val) {
        if (this.root) {
            let currentNode = this.root;
            while (currentNode) {
                if (val === currentNode.val) {
                    currentNode = null;
                    console.log('FOUND IT!!')
                    return true
                }
                else if (val < currentNode.val ) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode = null;
                        return false
                    }
                }
                else if (val > currentNode.val ) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode = null;
                        return false
                    }
                }
            }
        }
        else {
            console.log('Nothing in this Tree!')
            return 0
        }
    }

}

myBST = new BST

myBST.add(12)
myBST.add(22)
myBST.add(5)
myBST.add(44)
myBST.add(7)
myBST.add(18)
myBST.add(10)
myBST.add(2)
myBST.add(31)
myBST.add(27)
myBST.add(6)

console.log('------ADD------')
console.log(myBST)
console.log('------CONTAINS------')
console.log(myBST.contains(30))
console.log(myBST.contains(27))
console.log(myBST.contains(100))