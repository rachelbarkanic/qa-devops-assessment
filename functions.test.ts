const {shuffleArray} = require('./utils')

let array = [1, 2, 3]

describe('shuffleArray should', () => {
    test('return an array the same length as the array passed in', () => {
        expect(shuffleArray(array)).toHaveLength(3)
})
    test('return array in a different order', () => {
        expect(shuffleArray(array)).not.toBe([1, 2, 3])
    })
})