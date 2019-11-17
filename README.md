# lib-perso
## Description
Lib de fonction perso programmer en TypeScript qui peuvent servir dans mes projets

## Fonction disponible
```TypeScript
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
```

## Utilisation
### Require
```TypeScript
const lib:Func = require('./fonction')
```

### sum, prod, p
```TypeScript
const nb1:number = lib.sum(0, 4, i => nb1[i])
const nb2:number = lib.prod(0, 4, i => nb1[i])
const nb3:number = lib.p(3, 2)
```

### sfor
```TypeScript
lib.sfor(5, (i, r) => console.log('salut ' + i))

//=============================================

const tab:number[] = lib.sfor(10, (i, r) => {
    return [...r, i]
}, 0, [])
```
Utilisé dans :
* [démineur](https://github.com/LordPax/demineur)

### rand, str_rand
```TypeScript
const nbRand:number = lib.rand(0, 10)

//=============================================

const str:string = lib.str_rand(10, lib.rand)
```
Utilisé dans :
* [raccourcisseur](https://github.com/LordPax/raccourcisseur)

### match
```TypeScript
const test:number|string = lib.match(7)
.case(1, () => 'test1')
.case(2, () => 'test2')
.case(3, () => 'test3')
.case('truc', () => 'test4')
.case(5, () => {
    const r:number = lib.rand(0, 5)
    return lib.sum(0, 4, i => nb1[i] + lib.p(r))
})
.default(() => 0)

//=============================================

const nb:number = 6
const test2:string = lib.match(nb)
.if(nb < 5, () => 'nb < 5')
.if(nb === 5, () => 'nb = 5')
.case(6, () => 'nb = 6')
.default(() => 'default')
```
Utilisé dans :
* [démineur](https://github.com/LordPax/demineur)