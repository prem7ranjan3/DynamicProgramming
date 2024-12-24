function findMaxrep(arr){
    let m = {};
    let res = 0;
    let maxCount = 0;

    for(let i of arr){
        m[i] = (m[i] || 0) + 1;

        if(m[i]>maxCount){
            maxCount = m[i];
            res = i;
        }   
    }
    return res;
}




let data = [2,3,3,7,11,3,7,15,10];
console.log(findMaxrep(data));
