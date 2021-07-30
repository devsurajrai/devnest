import './App.css'

var boxArr=[]

let firstBlack=  <div className="box-container">
                      <span className="dark"></span>
                      <span className="light"></span>
                  </div>

let firstWhite= <div className="box-container">
                      <span className="light"></span>
                      <span className="dark"></span>
                </div>

function chessBoxesArr(){
        for(let i=1;i<=8;i++){
            for(let j=1;j<=4;j++){
                  if(i%2===0){
                     boxArr.push(firstWhite)
                  }
                  else{
                    boxArr.push(firstBlack)
                  }
            }
        }
}
chessBoxesArr()
var chessBoxes=boxArr.map(item =>{return(item)})
function App() {
  return(
    <div className="main-container">
        <div className="board">
            {chessBoxes}
        </div>
    </div>
)
}

export default App;
