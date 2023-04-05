class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.rareIndex = 0
    }
    enqueue(item) {
        this.items[this.rareIndex] = item
        this.rareIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}



// Queue class
class Queue{
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }
}

//1. enqueue function 
enqueue(element)
{   
    // adding element to the queue
    this.items.push(element);
}

// dequeue function
dequeue()
{
    // removing element from the queue returns underflow when called on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}
// peek function
peek()
{
    // returns the Front element of the queue without removing it.
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}

// isEmpty function
isEmpty() 
{
    // return true if the queue is empty.
    return this.items.length == 0;
}