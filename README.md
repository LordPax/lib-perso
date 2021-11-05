# lib-perso

## Description

Lib de fonction perso programmer en TypeScript qui peuvent servir dans mes projets

## Utilisation

### Require

```typescript
import * as lib from 'lib-perso'
```

### superfor

```typescript
lib.superfor(5, (i, r) => console.log('salut ' + i))

//=============================================

const tab:number[] = lib.superfor(10, (i, r) => {
    return [...r, i]
}, 0, [])
```

### randInt, str_rand

```typescript
const nbRand:number = lib.randInt(0, 10)

//=============================================

const str:string = lib.str_rand(10, lib.randInt)
```

### match

```typescript
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
.plage(7, 10, () => 'entre 7 et 10')
.default(() => 'default')
```

### constant

Rend un object immutable

```typescript
const tab:string[][] = lib.constant([
    ['test11', 'test12'],
    ['test21', 'test22'],
    ['test31', 'test32']
])

console.table(tab)
tab[0][0] = 'truc'
console.table(tab)
```