import {Fizzbuzz} from "../main/fizzbuzz";

describe('when fizzbuzzing', () => {
    it("should return '1' as a representation of the number 1", () => {
        let fizzbuzz: Fizzbuzz = new Fizzbuzz();
        expect(fizzbuzz.convert(1)).toBe('1');
    });
    it("should return '2' as a representation of the number 2", () => {
        let fizzbuzz: Fizzbuzz = new Fizzbuzz();
        expect(fizzbuzz.convert(2)).toBe('2');
    });
    it("should return 'Fizz' as a representation of the number 3", () => {
        let fizzbuzz: Fizzbuzz = new Fizzbuzz();
        expect(fizzbuzz.convert(3)).toBe('Fizz');
    })
})