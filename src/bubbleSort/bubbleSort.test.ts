import BubbleSort from './bubbleSort';

describe('bubble sort', () => {
    it('should sort given array', () => {
        const expected: number[]  = [-66, 0, 2, 12, 34, 34, 154];
        expect(BubbleSort.sort([34, 0, 34, 154, -66, 12, 2])).toEqual(expected);
    });
});
