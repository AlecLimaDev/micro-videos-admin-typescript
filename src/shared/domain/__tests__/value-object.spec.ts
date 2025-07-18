import { ValueObject } from "../value-object";


class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly prop1: string, readonly prop2: number) {
        super();
    }
}

describe("ValueObject Unit Test", () => {
    test("should be equals", () => {
        const valueObject1 = new StringValueObject("test");
        const valueObject2 = new StringValueObject("test");
        expect(valueObject1.equals(valueObject2)).toBe(true);
        const complexValueObject1 = new ComplexValueObject("test", 1)
        const complexValueObject2 = new ComplexValueObject("test", 1)
        expect(complexValueObject1.equals(complexValueObject2)).toBe(true)
    });


    test("should not be equals", () => {
        const valueObject1 = new StringValueObject("test1");
        const valueObject2 = new StringValueObject("test2");
        expect(valueObject1.equals(valueObject2)).toBeFalsy()
        const complexValueObject1 = new ComplexValueObject("test", 3)
        const complexValueObject2 = new ComplexValueObject("test", 4)
        expect(complexValueObject1.equals(complexValueObject2)).toBe(false)
    })


})