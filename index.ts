interface Func {
    sum:(i:number, n:number, callback:(i:number) => number, res?:number) => number,
    prod:(i:number, n:number, callback:(i:number) => number, res?:number) => number,
    p:(nb:number, pu?:number, acc?:number, res?:number) => number
    sfor:(compt:number, f:(i:number, r:any) => any, acc?:number, r?:any) => any
    rand:(min:number, max:number) => number
}

const Maths:Func = require('./fonction')

const nb1:number[] = [1, 2, 3, 4, 5]
const nb2:number[] = [5, 4, 3, 2, 1]

console.log(Maths.sum(0, 4, i => nb1[i] + Maths.p(nb2[i])))
console.log(Maths.prod(0, 4, i => nb1[i]))
console.log(Maths.rand(0, 5))

Maths.sfor(5, (i, r) => {
    console.log('salut ' + i)
})