
//Array Chunk

let arr_start = [3,4,9,1,6,4,9,7];
let size_chunk=3;

/*let arr_chunk = (arr,size) => {
    var chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += size));
  }
  return chunks;
}*/

console.log(`Chunked array of ${arr_start} with size ${size_chunk} is `)

 var arr_chunk = (array,size) => {
      let  chunked_arr = [];
  for (let i = 0; i < array.length; i++) {
   const last = chunked_arr[chunked_arr.length - 1];
   if (!last || last.length === size) {
     chunked_arr.push([array[i]]);
   } else {
       last.push(array[i]);
   }
 }
 console.log(chunked_arr)
 return chunked_arr;
}

arr_chunk(arr_start,size_chunk);

//Filter array- age greater than 18
let numbers_array = [67,9,56,32,16,22,12];
let num_maj= (num_ar,num) => {
  let  major_array=[];
 for(let i=0;i<num_ar.length;i++)
 {
     if(num_ar[i]>18)
     major_array.push(num_ar[i]);
 }
  return major_array;
}
console.log(`Numbers greater than 21 in  ${numbers_array} is ${num_maj(numbers_array,21)}`)

//Array find
var find_num = (arr,num) => {
    for(let i=0;i<arr.length;i++)
    if(arr[i]>num)
        return arr[i];
}
console.log(`Number greater than 21 in ${numbers_array} with find is ${find_num(numbers_array,21)}`)


//Array sum

var sum_num = (arr)=>{
    let sum_num=0;
  for(let i=0;i<arr.length;i++)
    sum_num+=arr[i];
    return sum_num;
}

console.log(`Sum of numbers in ${numbers_array} is ${sum_num(numbers_array)}`)

//Array Reduce

var reduce_num = (arr)=>{
    let red_num=arr[0];
  for(let i=1;i<arr.length;i++)
    red_num-=arr[i];
    return red_num;
}
console.log(`Difference of numbers in ${numbers_array} is ${reduce_num(numbers_array)}`)




