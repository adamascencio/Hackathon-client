export const operators = ["+", "-"]
let arrOfEqs:Array<any> = []

class equationAndAnswser {
    equation: any;
    answer: any;
    constructor(equation:any, answer:any) {
        this.equation = equation,
        this.answer = answer
    }
}

export default function calculate(world: any, num1: any, num2: any) {
    if(world == 1) {
        pickRandomNumAndOperator(num1, num2)
        console.log("arr",arrOfEqs)
    }
}


const pickRandomNumAndOperator = (num1: any, num2: any) => {
           let equation:Array<any> = []
    let eqNums:Array<any> = []
    let eqOps:Array<any> =[]
    //generates x number of random numbers
    while(eqNums.length <= num1) {
       let randomNum = Math.round(Math.random() * 10)
       eqNums.push(randomNum.toString())
    }   

    //grabs x number of random operators from operators array
    while(eqOps.length <= num2) {
        let randomOperator = Math.round(Math.random() * 3)
        eqOps.push(operators[randomOperator])
     }  
        //pushing randomly generated operators & numbers into the equation arr
        equation.push(eqNums)
        equation.push(eqOps) 
        
        //flattening equation
        let flatEq = equation.flat()

    switch(flatEq.length){
        case(3):
        let popped = flatEq.pop()
        flatEq.splice(1, 0, popped)
    } 
    arrOfEqs.push(new equationAndAnswser(flatEq, eval(flatEq.join(''))))

    return eval(flatEq.join(''))
    }


