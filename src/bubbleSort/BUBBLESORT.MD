# Bubble sort
Main idea of a bubble sort that we compare two elements of given array and swap them according to sort order. This operation is repeats for each element of the array.
Complexity of sort is O(n*n) in worst scenario and O(n) in best.

### Example
__First iteration:__
_here we starts with first element __34__ and on each iteration decrease length of array for inner loop_
```
[
  34, 0, 34, 154, -66, 12, 2
]
```

>_comparing __34__ and __0__ and __swap__ them_
```
[
  0, 34, 34, 154, -66, 12,  2
]
```
>_comparing __34__ and __34__ do not move it and take next element in array __34___ 

>_comparing __34__ and __156__ do not move it and take next element in array __156___ 

>_comparing __156__ and __-66__ and __swap__ them_ 
```
[
  0, 34, 34, -66, 154, 12,  2
]
```
>_comparing __156__ and __12__ and __swap__ them_ 

```
[
  0,  34, 34, -66, 12, 154,  2
]
```
>_comparing __156__ and __2__ and __swap__ them_ 

```
[
  0,  34, 34, -66, 12, 2, 154
]
```
__Second iteration:__
>_comparing __0__ and __34__ do not move it and take next element in array __34___

>_comparing __34__ and __34__ do not move it and take next element in array __34___ 

>_comparing __34__ and __-66__ and __swap__ them_ 

```
[
  0, 34, -66, 34, 12, 2, 154
]
```
>_comparing __34__ and __12__ and __swap__ them_ 

```
[
  0, 34, -66, 12, 34, 2, 154
]
```
>_comparing __34__ and __2__ and __swap__ them_ 

```
[
  0, 34, -66, 12, 2, 34, 154
]
```
__Third iteration:__
>_comparing __0__ and __34__ do not move it and take next element in array __34___

>_comparing __34__ and __-66__ and __swap__ them_ 

```
[
  0, -66, 34, 12, 2, 34, 154
]
```
>_comparing __34__ and __12__ and __swap__ them_ 
```
[
  0, -66, 12, 34, 2, 34, 154
]
```
>_comparing __34__ and __2__ and __swap__ them_ 
```
[
  0, -66, 12, 2, 34, 34, 154
]
```
__Fourth iteration:__
>_comparing __0__ and __-66__ and __swap__ them_ 
```
[
  -66, 0, 12, 2, 34, 34, 154
]
```
>_comparing __0__ and __12__ do not move it and take next element in array __12___

>_comparing __12__ and __2__ and __swap__ them_ 

```
[
  -66, 0, 2, 12, 34, 34, 154
]
```
__Fifth iteration:__
>_comparing __-66__ and __0__ do not move it and take next element in array __0___
>_comparing __0__ and __2__ do not move it

__Sixth iteration:__
>_comparing __-66__ and __0__ do not move it and take next element in array __0___

__Seventh iteration:__
_all sorted but we iterate through length anyway_
