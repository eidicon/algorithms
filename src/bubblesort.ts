'use strict'
import ISortable from './sortableInterface'

/**
 * Bubblesort implementaion
 */
export default class BubbleSort implements ISortable {

    protected arrayToSort: Array<Number>

    constructor(incomingArray: Array<Number>) {
        this.arrayToSort = incomingArray
    }

    /**
     * @return Array<Number>
     */
    sort(): Array<Number> {
        let length = this.arrayToSort.length
        do {
            let tmp: Number
            for (let i = 1; i < (length); i++) {
                if (this.arrayToSort[i-1] > this.arrayToSort[i]) {
                    tmp = this.arrayToSort[i-1]
                    this.arrayToSort[i-1] = this.arrayToSort[i]
                    this.arrayToSort[i] = tmp
                }
            }
            length--
        } while (length > 0)
        
        return this.arrayToSort
    }
}
