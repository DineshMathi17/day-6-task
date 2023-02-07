//3.write a "person" class to hold all details
class person{
  constructor(name,std,schoolname,dob,rank) {
    this.name=name;
    this.std=std;
    this.schoolname=schoolname;
    this.dob=dob;
    this.rank=rank;
  }
  greet = () => {
    return `Name is ${this.name}, ${this.std}-st std, ${this.schoolname} school, date of birth ${this.dob}, rank ${this.rank}`
  };
}
let Dinesh=new person("Dinesh","10","kalaimagal hr sec","25/7/2005","7");
console.log(Dinesh.greet());
