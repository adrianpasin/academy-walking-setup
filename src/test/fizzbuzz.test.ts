import {Fizzbuzz} from "../main/fizzbuzz";

describe('when fizzbuzzing', () => {
    it.each(
        [
            ['1', 1],
            ['2', 2],
            ['Fizz', 3],
            ['4', 4], 
            ['Buzz', 5]
        ])('should return %s as a representation of the number %i', (expectedOutput, input)=> {
            let fizzbuzz: Fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.convert(input)).toBe(expectedOutput);
        });
})