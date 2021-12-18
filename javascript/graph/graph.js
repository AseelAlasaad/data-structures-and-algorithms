'use strict';



class Vertex {
    constructor(value){
        this.value = value;
    }
}


class Edge {
    constructor(vertex, weight){
        this.vertex = vertex;
        this.weight = weight;
    }
}



class Graph {
    constructor(){
        this.list = new Map();
        this.size=0;
    }

    addVertix(vertex){
        this.list.set(vertex, [] )
        this.size++;
        return vertex;
    }

    addDirectedEdge(startVertex, endVertex, weight = 0){
        if(! this.list.has(startVertex) || ! this.list.has(endVertex)){
            console.log('Invaild nodes');
        }

        const edge = new Edge(endVertex, weight);
        const start = this.list.get(startVertex);
        start.push(edge);

    }
    getNeighbors(vertex){
        if(! this.list.has(vertex)){
            console.log('Invaild nodes');

        }
        else{
            return [...this.list.get(vertex)];
        }

    }
    Size()
    {
        if (this.size==0) {
            return null
        }
        return this.size;
    }
    printAll(){
        for(const [vertex, edge] of this.list.entries()){
            console.log(vertex, edge)
        }
    }

}
module.exports={Vertex,Graph,Edge}


const vertexOne = new Vertex(1);
const vertexTwo = new Vertex(2);
const vertexThree = new Vertex(3);
const vertexFour = new Vertex(4);

const graph = new Graph();
graph.addVertix(vertexOne );
graph.addVertix(vertexTwo );
graph.addVertix(vertexThree );
graph.addVertix(vertexFour );

graph.addDirectedEdge(vertexOne, vertexThree, 6);
graph.addDirectedEdge(vertexOne, vertexTwo, 5);
graph.addDirectedEdge(vertexTwo, vertexFour, 0);

console.log(graph.getNeighbors(vertexOne));
console.log(graph.Size());
graph.printAll();