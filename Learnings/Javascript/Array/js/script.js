// let arr =[1,2,3,4]

// arr.push(5,false,"ten",{name:"john", age:5})

// console.log(arr);

//push is used for inserting into an array





// pop is used for  remove index of last elements in array 
// arr.pop()

// console.log(arr);



//unshift is used to add one/more elements to the begining of an array

// arr.unshift(-1,0)
// console.log(arr)


//shift is used to remove the first element from an array


// arr.shift()
// console.log(arr);


//slice is used to cpy a part of  array the main array is not affected, last elementine copy cheyella 


// let mainarr = [10,20,30,40,50,60,70,80,90,100]

// let newarr = mainarr.slice(4,9)


// newarr.unshift(20,-10)

// console.log("first array", mainarr);
// console.log("sliced array is :", newarr);


// used for adding/removing/repalcing affects the org. arrray

// Syntax: Array.splice(Startindex,deletecount,item1,item1)


// Note; delete count zero anenkil add akum in splice method 
// let arr =[10,20,30,40]

// arr.splice(1,2)

// console.log(arr);

// arr.splice(1,0,20,30)
// console.log(arr);


//replacing using splice (delete and add)


// let orgArray = [10,20,30,40,50]

// let newElement = 45

// orgArray.splice(4,1,newElement)

// console.log(orgArray);


//slice method

// let words = "Hello Javascript"

// let copy = words.slice(0,5)
// console.log(words);
// console.log(copy);

// let copy1 = words.slice(6,words.length) // same as slice(6,17)
// console.log(copy1);



//includes function for validation


// let username = "edison@gmail.com"


// if (username.includes("@")) {
//     console.log("valid email address");
    
// } else {
//   console.log("invalid email address");
    
// }



//split helps to convert into array a string


// let characters = "hello my dear Chat Gpt"
// let char2 = "hello/my/dear/darling"

// let splitsample = characters.split(" ") //split quotesinu edakk soace ettal or word spilt akkum

// let split2 = char2.split("/")
// console.log(splitsample);
// console.log(split2);



//sum function
//rest operrator or rest parameter used instead of single arguments kodukkunen parakaram

// function sum(...values){
//     console.log(values);
    
// }

// sum(1,2,3,4,5,6,false,"echo")





//spread operator (.....spread) keeps the main array safe

let orgArray = [1,2,3,4,5,6,7,8,9,10]

let CopiedArray = [...orgArray]

CopiedArray[0] = 0

console.log(orgArray);
console.log(CopiedArray);

