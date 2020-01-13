# Select sort
Main idea of a select sort that we are searching for smallest element in subarray and then swap it with loop position on current iteration.
This operation is repeats for each element of the array.
Complexity of sort is O(n*n) in worst scenario and O(n) in best.

### Example
```
[
  34, 0, 34, 154, -66, 12, 2
]
```
__First iteration:__
finding index of the smallest value in array
>_comparing __0__ < __34___
__found index: 1 with value: 0__
_comparing __34__ < __0___ 
_comparing __154__ < __0___ 
_comparing __-66__ < __0___
__found index: 4 with value: -66__
_comparing __12__ < __-66___ 
_comparing __2__ < __-66___ 
__swaping 34 < -66__

```
[
  -66, 0, 34, 154, 34, 12, 2
]
```
__Second iteration:__
>_comparing __34__ < __0___
_comparing __154__ < __0___
_comparing __34__ < __0___
_comparing __12__ < __0___
_comparing __2__ < __0___
```
[
  -66, 0, 34, 154, 34, 12, 2
]
```
__Third iteration:__
>_comparing __154__ < __34___
_comparing __34__ < __34___
_comparing __12__ < __34___
__found index: 5 with value: 12__
_comparing __2__ < __12___
__found index: 6 with value: 2__
__swapping 34 and 2__
```
[
  -66, 0, 2, 154, 34, 12, 34
]
```
__Fourth iteration:__      
>_comparing __34__ < __154___
__found index: 4 with value: 34__
_comparing __12__ < __34___
__found index: 5 with value: 12__
_comparing __34__ < __12___
__swapping 154 and 12__
```
[
  -66, 0, 2, 12, 34, 154, 34
]
```
__Fifth iteration:__
>_comparing __154__ < __34___
_comparing __34__ < __34___
```
[
  -66, 0, 2, 12, 34, 154, 34
]
```
__Sixth iteration:__
>_comparing __34__ < __154___
__found index: 6 with value: 34__
__will swap 154 and 34__
```
[
  -66, 0, 2, 12, 34, 34, 154
]
```
__Seventh iteration:__
```
[
  -66, 0, 2, 12, 34, 34, 154
]
```
