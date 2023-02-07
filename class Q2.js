//convert the UML diagram to Typescript class. use number for double


class circle{
    constructor(radius){
        this.radius=radius;
    }
    area = () =>{
        let a=Math.PI*(this.radius**2);
        let c=2*Math.PI*this.radius;
        return `Area of Circle is ${a.toFixed(2)}. circumference of circule ${c.toFixed(2)}`
    };

}
let ar=new circle(2);
console.log(ar.area());
