var student = { name : "David Rayy", sclass : "VI", rollno : 12 }

var objectArr=Object.keys(student)

var str=""

for (let index=0; index<objectArr.length; index++){
    str+=objectArr[index]
    if(index!= objectArr.length-1)
    {
        str+=','
    }

}

console.log(str)




// for (let item in student){
//     console.log(item)
// }
