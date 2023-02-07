//4. write a class to calculate the uber price
let sum=0;
let string='';
class uber{
  constructor(locationname,price){
    this.locationname=locationname;
    this.price=price;
    
  }
  
  uberprice=()=>{
    string =string+' '+this.locationname+",";
    sum=sum+parseInt(this.price);
    return `location is ${string} total price is = ${sum}`
    
  }
}
let firstlocation=new uber("Salem",60);
let secondlocation=new uber("Mecheri",40);
firstlocation.uberprice();
console.log(secondlocation.uberprice());
