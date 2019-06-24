/*working with datatypes*/
//Numbers
//Strings
//Objects
//Arrays


/*Numbers*/
var number1=30;
alert('number1');
//We can perform addition arithmetic calculations in varriables eg,+,-,/



/*putting a varriable inside of a string*/
var number1 = 30;
alert("Best number is" + number1);



//Naming convetions ofvariables
//They can contain  numbers,letters, underscores,and dolllar signs


//types of var
var mynumber
//partial case
var Mynumber

//Arrays are used to store multiple varriable in single value
var colors=['red','blue','green']; 
alert(colors[2]);

//another to add arrays
colors=new Array('red','green');
colors.push('gray');
alert(colors[3]);

//The propery of lenght in arrays containing numberrs
//lenght checks the number of vlaues in an array
var numbers = [1, 2, 3, 4, 5, 6, 7];
alert(numbers.length);

//sort(),reverse() are methods used while with arrrays


//Loops Here we shall handle for loop,while loop and for in range
 //for loops
for (var i = 0; i < 10; i++) //varriable, dependency,and increment by one
   // for loop
   for(var i=0; i<10; i++){
    console.log(i);
}

// while loop
//while loop
i=0;
while(i<10){
    console.log(i);
    i++;
}

//forEachloop
var numbers = [34, 67, 78, 9, 67];
numbers.forEach(function(number){
    console.log(number);
});


//conditionals
var var1 = 3;
var var2 = 4;
if (var1==var2) {
    console.log('This is true')
} else {
    console.log('This is wrong')
}

//Switch statements
var fruit = 'Grapes';
switch (fruit) {
    case "banana":
        alert("I love banana");
        break;
    case "orange":
        alert("Some oranges are sower");
        break;
    case "mangoe":
        alert("i love improved mangoes");
    default:
        alert("All fruits are fruits are good for health");
        break;
}

//Objects
//objects literal
var person = {
    firstname='odong',
    lastname='Gilbert',
    age=56
}
console.log(person.firstname);
// To obatain full name we write function
fullname:function(){
    this.firstname +" "+this.lastname;
}
console.log(person.fullname());


 //constructor objects
 var apple=new Object();
 apple.color='green';
 appple.shape='round';

 apple.describe=function(){
  return 'Apple color is'+this.color+'and the shape is'+this.shape;
 }
 console.log(apple.describe());

  //object parttern
  function Fruit(color,name,shape){
    this.color=color;
    this.name=name;
    this.shape=shape;
}
var apple= new Fruit('green','apple','round');
console.log(apple);


//Array objects
var users=[
    {
        name:'glbert',
        age:19
    },

    {
      name:'Martha',
      age:20
  },

  {
      name:'james',
      age:39
  }
  
    
    ];
    console.log(users[0]);


     //Events // like you create a button and ser onclicklistener
     function doclick(){
        alert('You clicked')
    }