/**
 * @description
 * Bubble sort implementation
 */
export default class BubbleSort {
    /**
     * @method sort
     * @returns number[]
     */
    public static sort(arrayToSort: number[]): number[] {
        let length: number = arrayToSort.length;
        for (let k: number = length; k > 0; k--) {
            for (let i: number = 1; i < length; i++) {
                this.swap(arrayToSort, i - 1, i);
            }
            // tslint:disable-next-line:no-console
            console.log(`${k} iteration finished`);
            length--;
        }

        return arrayToSort;
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
        // tslint:disable-next-line:no-console
        console.log(`${data[firstIndex]} > ${data[secondIndex]}`);
        if (data[firstIndex] > data[secondIndex]) {
            const tmp: number = data[firstIndex];
            data[firstIndex] = data[secondIndex];
            data[secondIndex] = tmp;
            // tslint:disable-next-line:no-console
            console.log(data);
        }
    }
}
