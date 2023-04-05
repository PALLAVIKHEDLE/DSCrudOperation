// Stack class
class Stack {
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
 
}

//1. push Function : adds an element at the top of the stack.

push(element)
{
    // push element into the items
    this.items.push(element);
}

//2. pop function : returns the topmost element of stack and removes it. Return underflow when called on an empty stack.

pop()
{
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}

//3. peek(): returns the top most elements in the stack, but doesn’t delete it. 
peek()
{
    return this.items[this.items.length - 1];
}

//4. isEmpty() : return true if stack is empty

isEmpty()
{
    return this.items.length == 0;
}
