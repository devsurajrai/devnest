// for printing first numbers till the desired length

export function firstN(arr,first_elements){
    if((arr.length!=0)){
        if(!first_elements){
        
            console.log(arr[0])
        }
        else{
                if(first_elements>0){
                    let newArr=[]
                    for(var i=0;i<first_elements;i++){
                        if(arr[i]!=undefined){
                         newArr[i]=arr[i];
                        }
                    }
                    console.log(newArr)
                 }
                 else{
                     arr=[]
                console.log(arr)
                }
            }
}
    else{
        console.log(arr)
    }
}


// For cloning an array

export function clone(names) {
    var cloned_array=[];
    for (var i=0;i<names.length;i++)
    {   
        cloned_array[i]=names[i];

    } 
    console.log(cloned_array)
}

// For checking if the input is an array or not

//input => parameter

export function is_array(input) {

    if (typeof (input) == "object") {
        if (input[0] == undefined) {
            console.log("false")
        } 
        else {
            console.log("true")
        }
    } 
    
    else {
        console.log("false")
    }

}

// Array Elements to string separated by comma
var str='"';
export function arrToStr1(strArr) {
        for(var i=0;i<strArr.length;i++)
        {
    
         if(i<strArr.length-1){
            str=str+strArr[i] + ',';
         }
         
         else{
             str+=strArr[i]+ '"';
         }
    }
    
    console.log("")
    console.log(str)
}

// Array elements to string separated by '+' sign
var str1='"'
export function arrToStr2(strArr){
        for(var i=0;i<strArr.length;i++)
        {
    
         if(i<strArr.length-1){
            str1=str1+strArr[i] + '+';
         }
         
         else{
             str1+=strArr[i]+ '"';
         }
    }
    console.log(str1)
    console.log("")
}

// To find most frequent occuring item in an array

export function mostFrequent(arr){

var itemIndex=0;
var item=[];
var counterArr=[];
const max={
    maxTime:0,
    maxTimeIndex:0
}



for(let i=0;i<arr.length;i++){
    if(!item.includes (arr[i])){
        item[itemIndex]=arr[i];
        itemIndex++;
    }
}

for(var i=0;i<item.length;i++){
    var counter=0;
    for(var j=0;j<arr.length;j++){
            if(item[i]===arr[j]){
                counter++;
            }
            counterArr[i]=counter;
    }
}

for(var i=0;i<counterArr.length;i++){
    for(var j=0;j<counterArr.length;j++){
        if(counterArr[i]>max.maxTime){
            max.maxTime=counterArr[i];
            max.maxTimeIndex=i;
        }
    }
}

var output= item[max.maxTimeIndex] + " ( " + max.maxTime + " times" + " )"
console.log(output)
}




        
        

