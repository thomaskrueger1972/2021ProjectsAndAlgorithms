class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let nodeA = new Node(18), nodeB = new Node(22), nodeC = new Node(69)
nodeA.next = nodeB
nodeB.next = nodeC

console.log(nodeA);


class SLL {
    constructor() {
        this.head = null;
    }

    front() {
        console.log(this.head.value)
    }

    removeFront() {
        this.head = this.head.next
        console.log(this.head.value)
    }

    addFront(val) {
        let currentHead = this.head;
        let nodeNew = new Node(val);
        nodeNew.next = currentHead
        this.head = nodeNew
        console.log(this.head.value, '>>', this.head.next.value)
    }

}

let mySLL = new SLL();

mySLL.head = nodeA;

console.log('------ADD FRONT------')
mySLL.addFront(77)
console.log('------REMOVE FRONT------')
mySLL.removeFront()
console.log('------FRONT------')
mySLL.front();