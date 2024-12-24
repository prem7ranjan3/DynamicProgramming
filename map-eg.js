const users = [
    {fname:"prem",lname:"ranjan",age:30},
    {fname:"niraj",lname:"jain",age:20},
    {fname:"sita",lname:"ram",age:40}
]
const res = users.reduce((acc,curr)=>{
    if(curr.age == 20){
        acc = curr;
    }
    return acc;
},{});

console.log(res);