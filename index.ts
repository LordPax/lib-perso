interface Func {
    sum:(i:number, n:number, callback:(i:number) => number, res?:number) => number
    prod:(i:number, n:number, callback:(i:number) => number, res?:number) => number
    p:(nb:number, pu?:number, acc?:number, res?:number) => number
    sfor:(compt:number, f:(i:number, r:any) => any, acc?:number, r?:any) => any
    rand:(min:number, max:number) => number
    match:(test?:any, acc?:any) => any
    timeTester:(callback:()=>void) => number
    str_rand:(taille:number, f:(n1:number, n2:number)=>number, char?:string) => string
}

const lib:Func = require('./lib-perso')

const nb1:number[] = [1, 2, 3, 4, 5]
const nb2:number[] = [5, 4, 3, 2, 1]

console.log(lib.sum(0, 4, i => nb1[i] + lib.p(nb2[i])))
console.log(lib.prod(0, 4, i => nb1[i]))
console.log(lib.rand(0, 5))

console.log('\n ====================================\n')

lib.sfor(5, (i, r) => console.log('salut ' + i))

const tab:number[] = lib.sfor(10, (i, r) => {
    return [...r, i]
}, 0, [])

console.log(tab)

console.log('\n ====================================\n')

console.log('str rand : ' + lib.str_rand(10, lib.rand))

console.log('\n ====================================\n')

const test:number|string = lib.match(7)
.case(1, () => 'test1')
.case(2, () => 'test2')
.case(3, () => 'test3')
.case(4, () => 'test4')
.case(5, () => {
    const r:number = lib.rand(0, 5)
    return lib.sum(0, 4, i => nb1[i] + lib.p(r))
})
.case(6, () => {
    const r:number = lib.rand(0, 5)
    return lib.prod(0, 4, i => nb1[i] + lib.p(r))
})
.case(7, () => lib.sfor(5, (i, r) => {
    console.log('i : ' + i + ', r : ' + r)
    return i + r
}))
.default(() => 0)

console.log(test)

console.log('\n ====================================\n')

const nb:number = 6
const test2:string = lib.match(nb)
.if(nb < 5, () => 'nb < 5')
.if(nb === 5, () => 'nb = 5')
.case(6, () => 'nb = 6')
.default(() => 'default')

console.log(test2)

/*console.log('\n ====================================\n')

const timeIf:number = lib.timeTester(() => {
    const nb:number = 3
    let t_test:string
    if (nb === 1)
        t_test = 'timeIf test1'
    else if (nb === 2)
        t_test = 'timeIf test2'
    else if (nb === 3)
        t_test = 'timeIf test3'
    else if (nb === 4)
        t_test = 'timeIf test4'
    else if (nb === 5)
        t_test = 'timeIf test5'
    else if (nb === 6)
        t_test = 'timeIf test6'
    else if (nb === 7)
        t_test = 'timeIf test7'
    else if (nb === 8)
        t_test = 'timeIf test8'
    else if (nb === 9)
        t_test = 'timeIf test9'
    else if (nb === 10)
        t_test = 'timeIf test10'
    else if (nb === 11)
        t_test = 'timeIf test11'
    else if (nb === 12)
        t_test = 'timeIf test12'
    else
        t_test = 'timeIf default'
    console.log(t_test)
})

const timeSwitch:number = lib.timeTester(() => {
    const nb:number = 3
    let t_test:string
    switch(nb) {
        case 1 :
            t_test = 'timeSwitch timeMatch test1'
            break
        case 2 :
            t_test = 'timeSwitch test2'
            break
        case 3 :
            t_test = 'timeSwitch test3'
            break
        case 4 :
            t_test = 'timeSwitch test4'
            break
        case 5 :
            t_test = 'timeSwitch test5'
            break
        case 6 :
            t_test = 'timeSwitch test6'
            break
        case 7 :
            t_test = 'timeSwitch test7'
            break
        case 8 :
            t_test = 'timeSwitch test8'
            break
        case 9 :
            t_test = 'timeSwitch test9'
            break
        case 10 :
            t_test = 'timeSwitch test10'
            break
        case 11 :
            t_test = 'timeSwitch test11'
            break
        case 12 :
            t_test = 'timeSwitch test12'
            break
        default :
            t_test = 'timeSwitch default'
            break
    }
    console.log(t_test)
})

const timeMatch:number = lib.timeTester(() => {
    const t_test:string = lib.match(3)
    .case(1, () => 'timeMatch test1')
    .case(2, () => 'timeMatch test2')
    .case(3, () => 'timeMatch test3')
    .case(4, () => 'timeMatch test4')
    .case(5, () => 'timeMatch test5')
    .case(6, () => 'timeMatch test6')
    .case(7, () => 'timeMatch test7')
    .case(8, () => 'timeMatch test8')
    .case(9, () => 'timeMatch test9')
    .case(10, () => 'timeMatch test10')
    .case(11, () => 'timeMatch test11')
    .case(12, () => 'timeMatch test12')
    .default(() => 'timeMatch defaul')
    console.log(t_test)
})

console.log('timeIf : ' + timeIf + ' ms')
console.log('timeSwitch : ' + timeSwitch + ' ms')
console.log('timeMatch : ' + timeMatch + ' ms')*/