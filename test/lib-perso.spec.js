const assert = require('assert')
const { 
    match, 
    roundNumber,
    constant
} = require('../build/main')

describe('lib-perso', () => {
    describe('#match()', () => {
        it('should be equal to "test2"', () => {
            const res = match(5)
            .case(6, () => 'test1')
            .case(5, () => 'test2')
            .case(2, () => 'test3')
            .case(7, () => 'test4')
            .default(() => 'default')

            assert.strictEqual(res, 'test2')
        })
        it('should be equal to "default"', () => {
            const res = match(1)
            .case(6, () => 'test1')
            .case(5, () => 'test2')
            .case(2, () => 'test3')
            .case(7, () => 'test4')
            .default(() => 'default')

            assert.strictEqual(res, 'default')
        })
        it('should be equal to "test3"', () => {
            const res = match(13)
            .plage(0, 5, () => 'test1')
            .plage(6, 10, () => 'test2')
            .plage(11, 15, () => 'test3')
            .plage(16, 20, () => 'test4')
            .default(() => 'default')

            assert.strictEqual(res, 'test3')
        })
    })    
    describe('#roundNumber()', () => {
        it('should round 5.21483292 => 5.21', () => {
            assert.strictEqual(roundNumber(5.21483292, 2), 5.21) 
        })
        it('should round 8.1987382 => 8.2', () => {
            assert.strictEqual(roundNumber(8.1987382, 1), 8.2) 
        })
    })
    describe('#constant()', () => {
        it('should not change', () => {
            const tab = constant([
                ['test11', 'test12'],
                ['test21', 'test22'],
                ['test31', 'test32']
            ])
            tab[0][0] = 'truc'
            assert.strictEqual(tab[0][0], 'test11') 
        })
    })
})
