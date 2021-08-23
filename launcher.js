class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB,
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
     
        
    }
   
    
    fly(){
        this.launcher.bodyA = null;
    }

    attach(bodyA){
        this.launcher.bodyA = bodyA;


    }

   
    
   
    display(){
      
            if(this.launcher.bodyA){
            var bodyA = this.launcher.bodyA.position;
            var pointB = this.launcher.pointB
            // push()
            strokeWeight(4);
            stroke(84,18,18);
            }
           
          
            
            // pop()

            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
