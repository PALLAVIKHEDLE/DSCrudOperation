

// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/



/*
Basic Operation Of Tree Data Structure:
1. Create – create a tree in the data structure.
2. Insert − Inserts data in a tree.
3. Search − Searches specific data in a tree to check whether it is present or not.
4. Traversal:
BFS & DFS are two common algorithms that are used for tree traversals.
visiting each element or node of tree in specific order.
there are two traversal technique
1) BFS->(find the element from top) use queue data strcuture.
BFS explore thr tree level by level.
2) DFS->(top to depth)
DFS explore the tree by going as deep as possible first.
It start at the root node visits the child node before visiting any sibling Node.
    a). Preorder Traversal – perform Traveling a tree in a pre-order manner in the data structure.(root, left, right)
    b). In order Traversal – perform Traveling a tree in an in-order manner.(left, root,right)
    c). Post-order Traversal –perform Traveling a tree in a post-order manner.(left,right,root)
*/


//INSERT


// insert(data) – It creates a new node with a value data, 
// if the tree is empty it add this node to a tree and make it a root, otherwise it calls insert(node, data).
// insert(node, data) – It compares the given data with the data of the current node and moves left or right 
// accordingly and recur until it finds a correct node with a null value where new node can be added.
class Node{
    constructor(data){
        this.left=null
        this.right=null
        this.data=data
    }
}

class BST{
    constructor(){
        this.root=null
    }
    insert(data){
        //create a new node
        const node=new Node(data)
        if(this.root==null){
            this.root=node
            return
        }
        let current=this.root
        while(true){
            if(data<current.data){
                if(current.left==null){ 
                    current.left=node
                    return
                }
                current=current.left
            }else{
                if(current.right==null){
                    current.right=node
                    return
                }
                current=current.right
                }
        }
    }
}

//TRAVERSAL(recursive way)
//IN-ORDER
var inorderTraversal = function(root) {
    //recursive way
    if(root==null) return []
    const result=[]
    if(root.left!==null) result.push(...inorderTraversal(root.left))
    result.push(root.val)
    if(root.right!==null) result.push(...inorderTraversal(root.right))

return result
}

//PRE Order
var preorderTraversal = function(root) {
    //recursive way
    if(root ===null) return []
    const result=[]
    result.push(root.val)
    if(root.left!==null) result.push(...preorderTraversal(root.left))
    if(root.right!==null) result.push(...preorderTraversal(root.right))

return result
}

//POST Order
var postorderTraversal = function(root) {
    //recursive way
    if(root==null)return []
    const result=[]
    if(root.left!==null) result.push(...postorderTraversal(root.left))
    if(root.right!==null) result.push(...postorderTraversal(root.right))
    result.push(root.val)

return result
};