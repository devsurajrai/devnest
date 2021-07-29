import { firstN } from "./modules/func-modules.mjs"

var arr=[7,9,0,-2]
var num= 6;
firstN(arr,num)

/* Test Cases
1. ([7,9,0,-2]). // output: 7
2. ([],3). // output: []
3. ([7,9,0,-2],3) // output: [7,9,0]
4. ([7,9,0,-2],6) // output: [7,9,0,-2]
5. ([7,9,0,-2],-3) // output: []
*/ 