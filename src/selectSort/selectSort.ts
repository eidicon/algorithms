/**
 * @description
 * Select sort implementation
 */
export default class SelectSort {
    /**
     * @method sort
     * @param {number[]} arrayToSort
     * @returns number[]
     */
    public static sort(arrayToSort: number[]): number[] {
        for (let i = 0; i < arrayToSort.length; i++ ) {
            const index = this.smallestItemIndex(arrayToSort, i);
            this.swap(arrayToSort, i, index);
        }

        return arrayToSort;
    }

    /**
     * @description find smallest value in array starting from given position
     * @param data number[]
     * @param startIndex number
     * @returns number
     */
    private static smallestItemIndex(data: number[], startIndex: number): number {
        let minValue = data[startIndex];
        let minIndex = startIndex;
        for (let i = minIndex + 1; i < data.length; i++) {
            if (data[i] < minValue) {
                minIndex = i;
                minValue = data[i];
            }
        }
        return minIndex;
    }

    /**
     * @description
     * ascending order: firstIndex <= secondIndex
     * ascending order: firstIndex >= secondIndex
     * @param {number[]} data number[]
     * @param {number} firstIndex
     * @param {number} secondIndex
     */
    private static swap(data: number[], firstIndex: number, secondIndex: number ) {
        if (data[firstIndex] > data[secondIndex]) {
            const tmp: number = data[firstIndex];
            data[firstIndex] = data[secondIndex];
            data[secondIndex] = tmp;
        }
    }
}
