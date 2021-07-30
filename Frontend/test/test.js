var boxArr=[]
var firstBlack=   "Suraj"

  var firstWhite= "XYZ"

  function printChessBoxes(){
    for(let i=1;i<=4;i++){
      for(let j=1;j<=4;j++){
        if(i%2===0){
          boxArr.push(firstBlack)
          // return(
          //   firstWhite
          // )
          // console.log("Suraj")
        }
        else{
          boxArr.push(firstWhite)
          // return(
          //   firstBlack
          // )
          // console.log("Rai")
        }
      }
    }
  }
  printChessBoxes()
  console.log(boxArr)