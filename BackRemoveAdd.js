class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value){
        var restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this
    }
    length(){
        var monkey = this.head
        var count = 1;
        while(monkey){
            monkey = monkey.next;
            count +=1;
        }
        return count
    }
    max(){
        var max = this.head.value
        var monkey = this.head.next
        while (monkey){
            if(max<monkey.value){
                max = monkey.value
            }
            monkey=monkey.next
        }
        return max
    }
    min(){
        var min = this.head.value
        var monkey = this.head.next
        while(monkey){
            if(min>monkey.value){
                min = monkey.value
            }
            monkey=monkey.next
        }
        return min
    }
    average(){
        var sum = 0;
        var monkey=this.head;
        while(monkey){
            sum += monkey.value
            monkey=monkey.next
        }
        return sum/this.length()
    }
    back(){
        var monkey = this.head
        while(monkey.next){
            monkey=monkey.next
        }
        return monkey.value
    }
    
    removeBack(){
        var monkey=this.head;
        while(monkey.next.next){
            monkey=monkey.next;
        }
        monkey.next = null;
        return this
    }

    addBack(value){
        var monkey=this.head
        while(monkey.next){
            monkey=monkey.next
        }
        monkey.next = new Node(value);
        return this
    }
}



var first_sll = new SLL(2);
console.log(first_sll.addFront(4).addFront(5).addFront(6).addFront(8).addFront(10));
console.log(first_sll.max())
console.log(first_sll.min())
console.log(first_sll.average())
console.log(first_sll.back())
console.log(first_sll.removeBack())
console.log(first_sll.addBack())