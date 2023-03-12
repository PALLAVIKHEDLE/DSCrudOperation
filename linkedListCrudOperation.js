// Basic Operations
// Following are the basic operations supported by a list.
// 1. Insertion − Adds an element at the beginning of the list.
// 2. Deletion − Deletes an element at the beginning of the list.
// 3. Display − Displays the complete list.
// 4. Search − Searches an element using the given key.
// 6. Traversal - access each element of the linked list
// 7. Sort - sort the nodes of the linked list



// head points to the first node of the linked list
// next pointer of the last node is NULL, so if the next current node is NULL, we have reached the end of the linked list.


1. 

// user defined class listNode having two Properties element and next.
// element holds the data of a node while next holds the pointer to the next node, which is intialized to the null value.

class ListNode {
       // constructor
    constructor(element) {
        this.element = element
        this.next = null                
    }
}


2. 
// Linked list class with a constructor. it has two properties head and size.
// where the head stores the first node of a list, and size indicates the number of nodes in a list. 
class LinkedList{
    constructor(){
        this.head(null);
        this.size(0);
    }

}

3.
//ceate two list nodes, node1 and node2 and a pointer from node1 to node2

let node1= new LinkedList(2)
let node2=new LinkedList(5)
node1.next=node2

4.
// Will create new linked list with node 1
let list = new LinkedList(node1)


5. 
// try to access the nodes in the list we just created.
console.log(list.head.next.data) //returns 5

6.
// Insert element at the End of the list

add(element)
{
    //create a new node 
    var node= new Node(element);
    //to store the current node
    var current

    //if the list is empty add the element and make it head
    if(this.head==null){
        this.head=node
    }else{
        current=this.head
        //iterate to the end of the list
        while(current.next){
            current=current.next
        }
        // add node
        current.next=node
    }
    this.size++;
}


7.
// insert element at the position index of the list
insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index.");
    else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;
 
        curr = this.head;
 
        // add the element to the first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
 
            // iterate over the list to find the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}

// In order to add an element at the given index of the list we consider three conditions as follows: 
// 1. if the index is zero we add an element at the front of the list and make it head
// 2. If the index is the last position of the list we append the element at the end of the list
// 3. if the index is between 0 or size – 1 we iterate over to the index and add an element at that index

8.
// removes an element from the specified location
removeFrom(index)
{
    if(index<0|| index>=this.size) return console.log("Please Enter a valid index");
    else{
        var curr, prev, it=0
        curr=this.headprev=curr
        //deleting first element

        if(index===0) this.head= curr.next
        else{
               // iterate over the list to the position to removce an element
               while(it<index){
                it++
                prev=curr
                curr=curr.next
               }
               //remove the element
               prev.next=curr.next
        }
        this.size--

          // return the remove element
          return curr.element;
    }
}

// In order to remove an element from the list we consider three conditions: 

// 1. If the index is 0 then we remove the head and make the next node head of the list
// 2. if the index is size – 1 then we remove the last element from the list and make prev the last element
// 3. if it’s in between 0 to size – 1 we remove the element by using prev and the current node


8.

// removes a given element from the list
removeElement(element)
{
    var current = this.head;
    var prev = null;
 
    // iterate over the list
    while (current != null) {
        // comparing element with current element if found then remove the and return true
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}


9.
//Display List 
displayList()
{
    //Create an empty array.
    let displayArrayList=[]
    //Pointer which points to the head node
    let currentNode=this.head
    //start iterating from the first node till you reach the last node
    while(currentNode!=null){
        //add every node's value to the array
        displayArrayList.push(currentNode.value)
        //point pointer to the next node
        currentNode = currentNode.next;
    }
     //Return the array
     return printArrayList.join(' -> ');
}

