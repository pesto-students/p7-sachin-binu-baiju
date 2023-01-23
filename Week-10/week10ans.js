class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    //To insert values
    insert(value){
        let newnode = new Node(value);
        
        if(this.root == null){
            this.root = newnode;
            return this
        }
        
            let current = this.root;
            while(true){
                if(value == current.value){
                    return undefined;
                }
                if(value<current.value){
                    if(current.left === null){
                        current.left = newnode
                        return this;
                    }
                  
                        current = current.left;
                    
                }
                else if(value>current.value){
                    if(current.right === null){
                        current.right = newnode
                        return this;
                    }
                
                        current = current.right;
                    
                }
            }
    }
    
    // Return the level order traversal of its nodes' values
    Levelordertraversal(){
        let Node = this.root,
        data = [],
        queue = [];
        
            queue.push(Node)
        
        while(queue.length){
            let len = queue.length;
            let temp = [];
            for(let i=0;i<len;i++){
                Node = queue.shift();
                temp.push(Node.value);
                if(Node.left) queue.push(Node.left)
                if(Node.right) queue.push(Node.right)
            }
            data.push(temp);
        }
        return data;
    }
}

//Return its maximum depth
var maxDepth = function(root) {

    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
};

//Determine if it is a binary tree or not
var valideBinarytree = function(root) {
    var helper = function(node,min,max){
        if(!node) return true
        if(node.val<=min || node.val>=max) return false
        return helper(node.left,min,node.val) && helper(node.right,node.val,max)
    }
   
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

}
//Find if there is way from source to destination in a graph
var validPath = function(n, edges, source, destination) {
    
    let length = edges.length;
    if(length == 0) return true;
    
    let visited = [];
        let queue = [source];
        while(queue.length > 0) {
            let element = queue.shift();
            visited[element] = true;
            let i = 0;
            while(i < edges.length) {
                let index = (edges[i]).indexOf(element);
                if(index != -1) {
                    let secondElement = edges[i][1-index];
                    if(secondElement == destination) {
                            return true;
                    } else {
                        if(!visited[secondElement]) {
                            queue.push(secondElement);
                        }
                    }   
                }
                i++;
            }
        }
        return false;
};

//Return the label of the town judge if the town judge existsand can be identified, or return -1
var findJudge = function(n, trust) {
    let arr = new Array(n).fill(0)
    let count = new Array(n).fill(0)
    for(let [x,y] of trust){
        arr[x-1] = 1;
        count[y-1]++
    }
    for(let i =0; i<arr.length;i++){
        if(arr[i] == 0 && count[i] == n-1){
            return i+1
        }
    }
    return -1;
};

//find all possiblepaths from source to target and return them in any order.
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1;
    
    const res = [];
    
    const DFS = (node,path) => {
        
        path.push(node);
        
        if(node === target) { 
            res.push(path);
            return;
        }
            
        for(let edge of graph[node]) {
            DFS(edge,[...path]);
        }
    }
    
    DFS(0,[]);
    
    return res;
};

let bt = new BinaryTree();

bt.insert(10)
bt.insert(5)
bt.insert(13)
bt.insert(11)
bt.insert(2)
bt.insert(16)
bt.insert(12)

console.log(maxDepth(bt.root));
console.log(valideBinarytree(bt.root));
console.log(bt.Levelordertraversal());
console.log(validPath(3, [[0,1],[1,2],[2,0]],0,2));
console.log(findJudge(2,[[1,2]]));
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));



