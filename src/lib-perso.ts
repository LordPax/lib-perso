// interface Mat {
//     case:(val:any, act:()=>any) => any
//     default:(act:()=>any) => any
// }
type Back = () => any
interface Match {
    case : (val:any, act:Back) => any
    if: (cond:boolean, act:Back) => any
    plage: (val1:any, val2:any, act:Back) => any
    default : (act:Back) => any
}

export const sum = (i:number, n:number, callback:(i:number) => number, res:number = 0):number => {
    const r:number = res + callback(i)
    return i < n ? sum(i + 1, n, callback, r) : r
}

export const prod = (i:number, n:number, callback:(i:number) => number, res:number = 1):number => {
    const r:number = res * callback(i)
    return i < n ? prod(i + 1, n, callback, r) : r
}

export const p = (nb:number, pu:number = 2, acc:number = 0, res:number = 1):number => {
    const r:number = res * nb
    return acc < pu ? p(nb, pu, acc + 1, r) : res
}


export const superfor = (compt:number, f:(i:number, r:any) => any, acc:number = 0, r:any = null):any => {
    const re:any = acc < compt ? f(acc, r) : r
    return acc < compt ? superfor(compt, f, acc + 1, re) : re
}

export const randInt = (min:number, max:number):number => 
    Math.floor(Math.random() * (max - min + 1) + min)

export const rand = (neg:boolean = false):number => {
    const mul:number = neg ? -1 : 1
    return roundNumber(Math.random(), 2) * mul
}

export const rand2 = ():number => 
    randInt(0, 1) === 0 ? rand() : rand(true)

export const roundNumber = (num:number, dec:number):number => 
    Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)

export const str_rand = (taille:number, f:(n1:number, n2:number)=>number, char:string = ''):string => {
    const char_rand:number = f(0, 1) === 1 ? f(65, 90) : f(97, 122)
    const tmp:string = String.fromCharCode(char_rand)

    return taille > 0 ? str_rand(taille - 1, f, char + tmp) : char
}

export const match = (test:any, acc:any = null):Match => ({
    case : (val:any, act:Back):any => match(test, val === test ? act() : acc),
    if: (cond:boolean, act:Back):any => match(test, cond ? act() : acc),
    plage: (val1:any, val2:any, act:Back):any => match(test, (test >= val1 && test <= val2) ? act() : acc),
    default : (act:Back):any => acc === null ? act() : acc
})

export const timeTester = (callback:()=>void):number => {
    const time:Date = new Date()
    const t1:number = time.getTime()
    callback()
    return time.getTime() - t1
}

export const constant = (object:any):any => {
    Object.freeze(object)
    for (const prop in object) {
        const val:any = object[prop]
        if (typeof val === 'object')
            constant(val)
    }
    return object
}

export const in_array = (search:any, array:any[]):number|boolean => {
    const find:any[] = array.filter(elem => elem === search)
    return find.length > 0 ? find.length : false
}

export const escapeHtml = (text:string):string => {
    const map:any = {
        '<': '&lt;',
        '>': '&gt;',
    }
    return text.replace(/[<>]/g, m => map[m])
}
