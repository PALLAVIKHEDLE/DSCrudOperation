// User defined class to store element and its priority
class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}
  
// PriorityQueue class
class PriorityQueue {
    constructor()
    {
        this.items = [];
        //array is a container of QElement
    }

}

//1. enqueue function: it adds elements to the queue according to its priority 

enqueue(element, priority)
{
    // creating object from queue element
    var qElement = new QElement(element, priority);
    var contain = false;
  
    // iterating through the entire item array to add element at the correct location of the Queue
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > qElement.priority) {
            // Once the correct location is found it is enqueued
            this.items.splice(i, 0, qElement);
            contain = true;
            break;
        }
    }
  
    // if the element have the highest priority it is added at the end of the queue
    if (!contain) {
        this.items.push(qElement);
    }
}

//2. dequeue function : removes an element from the priority queue
dequeue()
{
    if (this.isEmpty())
        return "Underflow";
    return this.items.shift();
}

//This function removes an element from the front of a queue as the highest priority element is stored at the
// front of the priority queue. We have used the shift method of an array to remove an element from the queue.

//3. front: returns the front element of the priority queue 

front()
{
    // returns the highest priority element in the Priority queue without removing it.
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}

//4. rear: return the last element of the priority queue

rear()
{
    // returns the lowest priority element of the queue
    if (this.isEmpty())
        return "No elements in Queue";
    return this.items[this.items.length - 1];
}