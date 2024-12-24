class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class linklist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
}

function add(element) {
let node = new Node(element);
let curr;
if(this.head == null){
    this.head = node;
} else {
    curr = this.head;
    while(curr.next){
        curr = curr.next;
    }
    curr.next = node;
}
this.size++;
}

let ll = new LinkedList();
// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());
// adding element to the list
ll.add(10);
// prints 10
ll.printList();
// returns 1
console.log(ll.size_of_list());