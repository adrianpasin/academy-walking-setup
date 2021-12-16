import {Fizzbuzz} from "../main/fizzbuzz";

describe('when fizzbuzzing', () => {
    it("should return a string representation of the number", () => {
        let fizzbuzz: Fizzbuzz = new Fizzbuzz();
        expect(fizzbuzz.convert(1)).toBe('1');
    })
})