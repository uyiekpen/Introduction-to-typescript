// //PRIMITIVE AND NON PRIMITIVE 

// let fruit : {
//     name : String,
//     color : String,
//     ripe :Boolean,
//     qty : Number

// } =  {
//     name :"mango",
//     color: "green",
//     ripe:false,
//     qty : 3
// }

// fruit.name ="orange"
// fruit.color ="orange"

// console.log(fruit)


// // let time : String = "joseph"
// // time = " tems"

// // console.log(time)
 
// // let a : Number = 2
// // let b : Number = 3

// //Array
// let arr : (Number| String| Boolean | null )[] = [
//     "osas",
//     "samuel",
//     "cynthia",
//     23,
//     true,
//     null
// ]
// console.log(arr)

// type Mydata = {
//     name : String,
//     qty : Number,
//     isReady : Boolean,
// }


// interface Peter extends Mydata {
//     user : any[]

// }

// interface jacob extends Peter {
//     product : any[]
// }

// let stock : jacob =  {
//     name : "Bag",
//     qty : 24 ,
//     isReady : true,
//     user : [
//         "peter"
//     ],
//     product : [
//         "osazie"
//     ]
// }

// console.log(stock)

// let school : String = "Codelab"

// let newSchool :String[] = school.split("")
 
// let reverse : String = newSchool.reverse().join("")

// console.log(reverse)


// const newSchool = (x: String) : number  => {
//     let xx :String[] = x.split("")
//     let newfile : number = parseInt(xx.reverse().join("")) 
    
//     return newfile 
// }

// const getData = (x : any[]):void => {
//     let index = Math.floor(Math.random() * x.length)
//     let d = x[index]
//     console.log(d)
// }

// getData([1, 7 , 9 , 4])

// const getSum =(x: number[]) =>{
//     return x.reduce((x,y) => (x + y))
// }

// const getPercent =(x: number) =>{
//     return x + 0.18
// }

// console.log(getSum([1, 2,3,4]))
// console.log(getPercent(getSum([1, 2,3,4])))

// const getData = <Arr>(x: Arr[]) : void =>{
//     let index = Math.floor(Math.random() * x.length)
//     let d = x[index]
//     console.log(d)
// }

// const arr1 = [1,2,6,7]
// const arr2 = ["blessing", "peter", "samuel"]


// getData(arr2)

// class Mydata {
//     name: string;
//     color: string;
//     ripe : boolean;
//     qty: number;

//     constructor( name: string,color: string,ripe : boolean,qty: number){
//             this.name = name;
//             this.color = color;
//             this.ripe = ripe;
//             this.qty = qty;

//         }
//         review() {
//             console.log(`this fruit ${this.name} has a color of ${this.color}`)
//         }
// }

// const newbuild = new Mydata("pawpaw","yellow",true,11)
// console.log(newbuild )
// newbuild.review()

class StudentResult {
    name: string;
    result : any[];

    constructor(result:  any[], name:  string,){
        this.name = name
        this.result = result
    }

    review(){
       return (this.result.reduce((x,y)=>(x+y)))
    }
    average(){
        let sum = this.review()
        let av = sum/this.result.length
        return av
    }
}

const newresult = new StudentResult([20, 40, 30], "osazie")
console.log(newresult)
console.log(newresult.review())
console.log(newresult.average())