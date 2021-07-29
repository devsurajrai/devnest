var student = { name : "David Rayy", sclass : "VI", rollno : 12 }

// console.log(Object.keys(student).length)

var counter=0;

for(let item in student){
    counter++;
}
console.log(counter)

