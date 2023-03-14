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

export default function calculate(world: number, level: number) {
    switch(world){
        case 1:
            switch(level){
                case 1:pickRandomNumAndOperator(2, 1, 10, 5)
                return arrOfEqs
                case 2:pickRandomNumAndOperator(2, 1, 11, 5) 
                return arrOfEqs
                case 3:pickRandomNumAndOperator(2, 1, 12, 5)
                return arrOfEqs
                case 4:pickRandomNumAndOperator(2, 1, 13, 5)
                return arrOfEqs
                case 5:pickRandomNumAndOperator(2, 1, 14, 5)
                return arrOfEqs
                case 6:pickRandomNumAndOperator(2, 1, 15, 5)
                return arrOfEqs
                case 7:pickRandomNumAndOperator(3, 2, 10, 5)
                return arrOfEqs
                case 8:pickRandomNumAndOperator(3, 2, 10, 5)
                return arrOfEqs
                case 9:pickRandomNumAndOperator(3, 2, 10, 5)
                return arrOfEqs
                case 10:pickRandomNumAndOperator(3, 2, 10, 5)
                return arrOfEqs
            }        
        
        case 2:
            switch(level){
            case 1:pickRandomNumAndOperator(2, 1, 10, 5)
            return arrOfEqs
            case 2:pickRandomNumAndOperator(2, 1, 11, 5) 
            return arrOfEqs
            case 3:pickRandomNumAndOperator(2, 1, 12, 5)
            return arrOfEqs
            case 4:pickRandomNumAndOperator(2, 1, 13, 5)
            return arrOfEqs
            case 5:pickRandomNumAndOperator(2, 1, 14, 5)
            return arrOfEqs
            case 6:pickRandomNumAndOperator(2, 1, 15, 5)
            return arrOfEqs
            case 7:pickRandomNumAndOperator(3, 2, 10, 5)
            return arrOfEqs
            case 8:pickRandomNumAndOperator(3, 2, 10, 5)
            return arrOfEqs
            case 9:pickRandomNumAndOperator(3, 2, 10, 5)
            return arrOfEqs
            case 10:pickRandomNumAndOperator(3, 2, 10, 5)
            return arrOfEqs
        }
        case 3:
            switch(level){
            case 1:pickRandomNumAndOperator(2, 2, 20, 5)
            return arrOfEqs
            case 2:pickRandomNumAndOperator(2, 2, 22, 5) 
            return arrOfEqs
            case 3:pickRandomNumAndOperator(2, 2, 24, 5)
            return arrOfEqs
            case 4:pickRandomNumAndOperator(2, 1, 25, 5)
            return arrOfEqs
            case 5:pickRandomNumAndOperator(3, 1, 26, 5)
            return arrOfEqs
            case 6:pickRandomNumAndOperator(2, 1, 27, 5)
            return arrOfEqs
            case 7:pickRandomNumAndOperator(3, 2, 28, 5)
            return arrOfEqs
            case 8:pickRandomNumAndOperator(3, 2, 29, 5)
            return arrOfEqs
            case 9:pickRandomNumAndOperator(3, 2, 30, 5)
            return arrOfEqs
            case 10:pickRandomNumAndOperator(3, 2, 35, 5)
            return arrOfEqs
        }
        case 4:
            switch(level){
            case 1:pickRandomNumAndOperator(4, 3, 40, 5)
            return arrOfEqs
            case 2:pickRandomNumAndOperator(4, 3, 36, 5) 
            return arrOfEqs
            case 3:pickRandomNumAndOperator(4, 3, 32, 5)
            return arrOfEqs
            case 4:pickRandomNumAndOperator(4, 3, 35, 5)
            return arrOfEqs
            case 5:pickRandomNumAndOperator(4, 3, 31, 5)
            return arrOfEqs
            case 6:pickRandomNumAndOperator(4, 3, 38, 5)
            return arrOfEqs
            case 7:pickRandomNumAndOperator(4, 3, 39, 5)
            return arrOfEqs
            case 8:pickRandomNumAndOperator(4, 3, 37, 5)
            return arrOfEqs
            case 9:pickRandomNumAndOperator(4, 3, 38, 5)
            return arrOfEqs
            case 10:pickRandomNumAndOperator(4, 3, 36, 5)
            return arrOfEqs
        }
        case 5:
            switch(level){
            case 1:pickRandomNumAndOperator(3, 2, 20, 5)
            return arrOfEqs
            case 2:pickRandomNumAndOperator(3, 2, 31, 5) 
            return arrOfEqs
            case 3:pickRandomNumAndOperator(3, 2, 28, 5)
            return arrOfEqs
            case 4:pickRandomNumAndOperator(3, 2, 15, 5)
            return arrOfEqs
            case 5:pickRandomNumAndOperator(3, 2, 29, 5)
            return arrOfEqs
            case 6:pickRandomNumAndOperator(3, 2, 28, 5)
            return arrOfEqs
            case 7:pickRandomNumAndOperator(3, 2, 30, 5)
            return arrOfEqs
            case 8:pickRandomNumAndOperator(3, 2, 45, 5)
            return arrOfEqs
            case 9:pickRandomNumAndOperator(3, 2, 45, 5)
            return arrOfEqs
            case 10:pickRandomNumAndOperator(3, 2, 30, 5)
            return arrOfEqs
        }
    }
    return arrOfEqs
}


const pickRandomNumAndOperator = (numOfNumbers: any, numOfOperations: any, multiplier: number, questions: number) => {
           let equation:Array<any> = []
    let eqNums:Array<any> = []
    let eqOps:Array<any> = []
    //generates x number of random numbers
    while(eqNums.length < numOfNumbers) {
       let randomNum = Math.round(Math.random() * multiplier)
       eqNums.push(randomNum.toString())
    }   

    //grabs x number of random operators from operators array
    if(numOfOperations == 1) {
        eqOps.push(operators[0])
    }else {
           while(eqOps.length < numOfOperations) {
        let randomOperator:number = Math.round(Math.random() * 1)
             eqOps.push(operators[randomOperator])
     }   
    }

        //pushing randomly generated operators & numbers into the equation arr
        equation.push(eqNums)
        equation.push(eqOps) 
        
        //flattening equation
        let flatEq = equation.flat()

        flatEq.forEach((i) => {
            if(i == "+" || i == "-") {
                flatEq.forEach((j, jindex) => {
                    if(jindex % 2 != 0 && jindex != 0 && j !="+" && j !="-" ){
                        flatEq.splice(jindex, 0, i)
                        flatEq.pop()
                    }
                })    
            }
        }
        )
        arrOfEqs.push(new equationAndAnswser(flatEq.join(' '), eval(flatEq.join(''))))
    }


