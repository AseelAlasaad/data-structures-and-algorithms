
function swap(arr, left, right){
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
function partition(arr, left, right) {
    var pivot= arr[Math.floor((right + left) / 2)];
    // console.log(pivot);
    var   i  = left;
    var   j  = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            console.log(i,j,arr);
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function QuickSort(arr, left, right) {
    var postion;
    if (left< right) {
        postion = partition(arr, left, right); 
            QuickSort(arr, left, postion - 1);
            QuickSort(arr, postion, right);
       
    }
    return arr;
}
// call  quick sort
let arr = [8,4,23,42,16,15];
let sortedArray = QuickSort(arr, 0, arr.length-1);
console.log(sortedArray); //prints [ 4, 8, 15, 16, 23, 42 ]

module.exports=QuickSort;