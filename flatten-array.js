const arr2 = [0, 1, 2, [[[3, 4]]]];

let depth = ((value) => {
    let count = 0;
    if(Array.isArray(value)){
        count++;
    }
    //console.log(count);
})();

const findsum = [ 0, 1, 2, 2, 3, 3, 4 ];
//console.log(Math.min(...findsum));
console.log(...new Set(findsum)); 

let sum = findsum.reduce((acc, curVal) => {
    return acc+curVal;
},0);
//console.log(sum);
function flatten(arr){
    return arr.reduce((acc,cur) => acc.concat(Array.isArray(cur) ? flatten(cur):cur),[]);
}
console.log(flatten(arr2));