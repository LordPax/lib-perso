const sum = (i:number, n:number, callback:(i:number) => number, res:number = 0):number => {
    const r:number = res + callback(i)
    return i < n ? sum(i + 1, n, callback, r) : r
}

const prod = (i:number, n:number, callback:(i:number) => number, res:number = 1):number => {
    const r:number = res * callback(i)
    return i < n ? prod(i + 1, n, callback, r) : r
}

const sfor = (compt:number, f:(i:number, r:any) => any, acc:number = 0, r:any = null):any => {
    const re:any = acc < compt ? f(acc, r) : r
    return acc < compt ? sfor(compt, f, acc + 1, re) : re
}

const integrale = (a:number, b:number, f:(i:number) => number):number => 0 // a faire

const F = (callback:(i:number) => number):number => 0 // a faire

const lim = ():number => 0 // a faire

const p = (nb:number, pu:number = 2, acc:number = 0, res:number = 1):number => {
    const r:number = res * nb
    return acc < pu ? p(nb, pu, acc + 1, r) : res
}

const rand = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1) + min)

module.exports = {
    sum : sum,
    prod : prod,
    p : p,
    sfor : sfor,
    rand : rand
}