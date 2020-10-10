//Array Chunk
var arr_start = [3, 4, 9, 1, 6, 4, 9, 7];
var size_chunk = 3;
/*let arr_chunk = (arr,size) => {
    var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += size));
  }
  return chunks;
}*/
console.log("Chunked array of " + arr_start + " with size " + size_chunk + " is ");
var arr_chunk = function (array, size) {
    var chunked_arr = [];
    for (var i = 0; i < array.length; i++) {
        var last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
        }
        else {
            last.push(array[i]);
        }
    }
    console.log(chunked_arr);
    return chunked_arr;
};
arr_chunk(arr_start, size_chunk);
//Filter array- age greater than 18
var numbers_array = [67, 9, 56, 32, 16, 22, 12];
var num_maj = function (num_ar, num) {
    var major_array = [];
    for (var i = 0; i < num_ar.length; i++) {
        if (num_ar[i] > 18)
            major_array.push(num_ar[i]);
    }
    return major_array;
};
console.log("Numbers greater than 21 in  " + numbers_array + " is " + num_maj(numbers_array, 21));
//Array find
var find_num = function (arr, num) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] > num)
            return arr[i];
};
console.log("Number greater than 21 in " + numbers_array + " with find is " + find_num(numbers_array, 21));
//Array sum
var sum_num = function (arr) {
    var sum_num = 0;
    for (var i = 0; i < arr.length; i++)
        sum_num += arr[i];
    return sum_num;
};
console.log("Sum of numbers in " + numbers_array + " is " + sum_num(numbers_array));
//Array Reduce
var reduce_num = function (arr) {
    var red_num = arr[0];
    for (var i = 1; i < arr.length; i++)
        red_num -= arr[i];
    return red_num;
};
console.log("Difference of numbers in " + numbers_array + " is " + reduce_num(numbers_array));
