class Circle {
  
  constructor(radius){
    this.radius = radius;
  }
  
  set diameter(diameter){
    this.diameter = diameter;
  }
  
 set circumference(circumference){
    this.circumference = circumference;
  }
  
  set area(area){
    this.area = area;
  }
  
  
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return Math.PI * this.diameter;
  }
  
  get area(){
    return Math.PI * this.radius * 2;
  }
  
  
}