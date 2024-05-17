// src/utils/deepMerge/deepMerge.test.ts
import { describe, it, expect } from "vitest";
import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
    it('should deeply merge two objects', () => {
        const obj1 = {
            a: 1,
            b: { c: 2, d: 3 },
        };
        const obj2 = {
            b: { c: 4, e: 5 },
        };
        const expected = {
            a: 1,
            b: { c: 4, d: 3, e: 5 },
        };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should not modify the original objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };

        deepMerge(obj1, obj2);

        expect(obj1).toEqual({ a: 1 });
        expect(obj2).toEqual({ b: 2 });
    });

    it('should handle non-object values', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 2, b: 3 };
        const expected = { a: 2, b: 3 };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should handle nested objects', () => {
        const obj1 = {
            a: { b: { c: 1 } },
        };
        const obj2 = {
            a: { b: { d: 2 } },
        };
        const expected = {
            a: { b: { c: 1, d: 2 } },
        };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should handle arrays within objects', () => {
        const obj1 = {
            a: [1, 2],
        };
        const obj2 = {
            a: [3, 4],
        };
        const expected = {
            a: [3, 4],
        };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should handle nested arrays', () => {
        const obj1 = {
            a: { b: [1, 2] },
        };
        const obj2 = {
            a: { b: [3, 4] },
        };
        const expected = {
            a: { b: [3, 4] },
        };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should handle functions as values', () => {
        const func1 = () => 'func1';
        const func2 = () => 'func2';
        const obj1 = { a: func1 };
        const obj2 = { a: func2 };
        const expected = { a: func2 };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should handle dates as values', () => {
        const date1 = new Date(2021, 1, 1);
        const date2 = new Date(2022, 2, 2);
        const obj1 = { a: date1 };
        const obj2 = { a: date2 };
        const expected = { a: date2 };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should handle null values', () => {
        const obj1 = { a: { b: 1 } };
        const obj2 = { a: { b: null } };
        const expected = { a: { b: null } };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should handle undefined values', () => {
        const obj1 = { a: { b: 1 } };
        const obj2 = { a: { b: undefined } };
        const expected = { a: { b: undefined } };

        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });
});
