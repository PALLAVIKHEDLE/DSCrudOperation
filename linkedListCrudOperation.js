// Basic Operations
// Following are the basic operations supported by a list.
// 1. Insertion − Adds an element at the beginning of the list.
// 2. Deletion − Deletes an element at the beginning of the list.
// 3. Display − Displays the complete list.
// 4. Search − Searches an element using the given key.
// 5. Delete − Deletes an element using the given key.
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
