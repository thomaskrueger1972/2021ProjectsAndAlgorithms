class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let nodeA = new Node(18), nodeB = new Node(22), nodeC = new Node(69), nodeD = new Node(77), nodeE = new Node(10)
nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD
nodeD.next = nodeE

class SLL {
    constructor() {
        this.head = null
    }

    contains(val) {
        let valueFound = false, current = this.head
        while(current) {
            if(current.value === val) {
                valueFound = true
            }
            current = current.next
        }
        console.log(valueFound)
    }

    length() {
        let runner = this.head, counter = 0
        while(runner) {
            counter++
            runner = runner.next
        }
        console.log(counter)
    }

    display() {
        let runner = this.head, display = "The values in the node are: ", newlist = []
        while(runner) {
            newlist.push(runner.value)
            runner = runner.next
        }
        let finalDisplay = display.concat(newlist.join(", "), ".")
        console.log(finalDisplay)
    }
}

let mySLL = new SLL;

mySLL.head = nodeA;

console.log('------ CONTAINS VALUE ------')
mySLL.contains(69)
mySLL.contains(12)
console.log('------ LENGTH ------')
mySLL.length()
console.log('------ DISPLAY ------')
mySLL.display()