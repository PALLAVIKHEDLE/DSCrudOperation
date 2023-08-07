/*
Basic Operation Of Tree Data Structure:
1. Create – create a tree in the data structure.
2. Insert − Inserts data in a tree.
3. Search − Searches specific data in a tree to check whether it is present or not.
4. Traversal:
    a). Preorder Traversal – perform Traveling a tree in a pre-order manner in the data structure.
    b). In order Traversal – perform Traveling a tree in an in-order manner.
    c). Post-order Traversal –perform Traveling a tree in a post-order manner.
*/

//INSERT

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