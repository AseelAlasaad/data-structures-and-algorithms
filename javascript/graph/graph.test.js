const {Vertex,Graph,Edge}=require('./graph');


describe('test graph', () => {

    it('works', () => {
      expect(true).toBeTruthy();
    });
  
    it('Node can be successfully added to the graph',()=>{
      let graph= new Graph();
      let One = new Vertex(1);
      graph.addVertix(One );
      
      expect(graph.addVertix(One)).toEqual({value:1});
  
    });

    it('An edge can be successfully added to the graph',()=>{
        let graph= new Graph();
        let One = new Vertex(1);
        graph.addVertix(One);
        let tow = new Vertex(2);
        graph.addVertix(tow);
        graph.addDirectedEdge(One,tow,6)
        expect(graph.getNeighbors(One)).toEqual([{ vertex:{ value: 2 }, weight: 6 }]);
    
      });

      it('A collection of all nodes can be properly retrieved from the graph',()=>{
        let graph= new Graph();
        let One = new Vertex(1);
        let tow = new Vertex(2);
   
        graph.addVertix(One);
        graph.addVertix(tow);
        graph.addDirectedEdge(One,tow,6)
        expect(graph.printAll()).toEqual({ value: 1 } [
             { vertex: { value: 2 }, weight: 6 }]);
            
        });

        it('All appropriate neighbors can be retrieved from the graph',()=>{
            let graph= new Graph();
            let One = new Vertex(1);
            let tow = new Vertex(2);
       
            graph.addVertix(One);
            graph.addVertix(tow);
            graph.addDirectedEdge(One,tow,6)
            expect(graph.getNeighbors(One)).toEqual([{ vertex:{ value: 2 }, weight: 6 }]);
            expect(graph.getNeighbors(tow)).toEqual([]);
   
            });

            it('The proper size is returned, representing the number of nodes in the graph',()=>{
                let graph= new Graph();
                let One = new Vertex(1);
                let tow = new Vertex(2);
           
                graph.addVertix(One);
                graph.addVertix(tow);
                // graph.addDirectedEdge(One,tow,6)
                expect(graph.Size()).toEqual(2);
       
                });

                it('A graph with only one node and edge can be properly returned',()=>{
                    let graph= new Graph();
                    let One = new Vertex(1);
               
                    graph.addVertix(One);
                  
                    // graph.addDirectedEdge(One,tow,6)
                    expect(graph.getNeighbors(One)).toEqual([]);
                   
                    });

                    
                it('An empty graph properly returns null',()=>{
                    let graph= new Graph();
                    expect(graph.Size()).toEqual(null);
                   
                    });
});