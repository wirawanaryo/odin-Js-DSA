function merge(leftarr, rightarr) {
    const arr = [];

    let i = 0;
    let j = 0;
    
    //sorting
    while (i < leftarr.length && j < rightarr.length) {
        if (leftarr[i] <= rightarr[j]) {
            arr.push(leftarr[i]);
            i++;
        } else {
            arr.push(rightarr[j]);
            j++;
        }
    }

    //leftover
    while (i < leftarr.length) {
        arr.push(leftarr[i]);
        i++;
    }
    while (j < rightarr.length) {
        arr.push(rightarr[j]);
        j++;
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length<=1){
        return arr; 
    }

    const mid = Math.floor(arr.length / 2);
    const sortedLeft = mergeSort(arr.slice(0, mid));
    const sortedRight = mergeSort(arr.slice(mid));
    merged = merge(sortedLeft, sortedRight);
    
    return merged
}



const arr = [38, 27, 43, 10];
const sorted = mergeSort(arr)
console.log(sorted);