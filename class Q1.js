//  //a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// class movie {
//     constructor(title,studio,rating) {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     greet = () => {
//      return `The title ${this.title}, the studio ${this.studio}, and the rating ${this.rating}`;
//     };
//   }
  
//   var Antman = new movie("Antman", "Marvel studio","PG-13");
//   console.log(Antman.greet());



// //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// class movie {
//     constructor(title,studio,rating="PG") {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     greet = () => {
//      return `The title ${this.title} the studio ${this.studio} and the rating ${this.rating}`;
//     };
//   }
  
//   var spiderman = new movie("spiderman", "Marvel studio","pg-13");
//   console.log(spiderman.greet());




// //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// let array=[];
// class Human {
//   constructor(name,rating) {
//    this.name=name;
//    this.rating=rating;
//   }
//   get HumanName() {
//     if(this.rating=='PG'){
//         return this.name;
//     }
//   }
// }
// let human1 = new Human("Avatar",'PG');
//  console.log(human1.name)



// //d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
// class movie {
//     constructor(title,studio,rating="PG") {
//         this.title=title;
//         this.studio=studio;
//         this.rating=rating;
//     }
//     greet = () => {
//       return `The title ${this.title}, the studio ${this.studio}, and the rating ${this.rating}`;
//     };
//   }
//   let Casino  = new movie("Casino Royale","Eon Productions","PG­13");
//   console.log(Casino.greet());
