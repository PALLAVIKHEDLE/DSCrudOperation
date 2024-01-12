/* The graph is a non-linear data structure. Graph G contains a set of vertices V and a set of Edges E. 
The connection between two nodes is called edge. Nodes can also be called vertices.

Graph is basically divided into two broad categories : 
    1. Directed Graph (Di- graph) – Where edges have direction.
    2. Undirected Graph – Where edges do not represent any directed

There are two primary ways of representing a graph:
    1. Adjacency list
    2. Adjacency Matrix

The adjacency matrix is one way of representing a graph using a two-dimensional array (NxN matrix). 
In the intersection of nodes, we add 1 (or other weight) if they are connected and 0 or - if they are not connected.

Adjacency List is one of the most common ways to represent graphs. Each node has a list of all the nodes connected to it.
Graphs can be represented as an adjacency list using an Array (or HashMap) containing the nodes. Each node includes a list (Array, linked list, set, etc.) that lists its adjacent nodes.


*/
// Adjacency matrix implementation,
class Graph {
    constructor(numNodes) {
      this.matrix = [];
      for (let i = 0; i < numNodes; i++) {
        this.matrix.push(new Array(numNodes).fill(0));
      }
    }
    addEdge(fromNode, toNode) {
      this.matrix[fromNode][toNode] = 1;
      this.matrix[toNode][fromNode] = 1;
    }
    removeEdge(fromNode, toNode) {
      this.matrix[fromNode][toNode] = 0;
      this.matrix[toNode][fromNode] = 0;
    }
    isEdge(fromNode, toNode) {
      return this.matrix[fromNode][toNode] === 1;
    }
  }

  //Adjacency List implementation
  class Graph {
    constructor() {
      this.list = {};
    }
    addNode(node) {
      this.list[node] = [];
    }
    addEdge(fromNode, toNode) {
      this.list[fromNode].push(toNode);
      this.list[toNode].push(fromNode);
    }
    removeEdge(fromNode, toNode) {
      this.list[fromNode] = this.list[fromNode].filter((node) => node !== toNode);
      this.list[toNode] = this.list[toNode].filter((node) => node !== fromNode);
    }
    isEdge(fromNode, toNode) {
      return this.list[fromNode].includes(toNode);
    }
  }

  //BFS Traversal
  class Graph{
    //...
    bfs(startNode){
        const visited =new Set()
        const queue=[startNode]
        visited.add(startNode)
        while(queue.length>0){
            const currentNode=queue.shift()
            this.list[currentNode].forEach((node)=>{
                if(!visited.has(node)){
                    visited.add(node)
                    queue.push(node)
                }
            })
        }
    }
  }


//DFS Traversal
class Graph{
    //...

    dfs(startNode, visited=new Set()){
        visited.add(startNode)
        this.list[startNode].forEach((node)=>{
            if(!visited.has(node)){
                this.dfs(node,visited)
            }
        })
    }
}