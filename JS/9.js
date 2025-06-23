// const points=[2,5,3,2,1,8];
// points.forEach((index,a)=>{
//     console.log(index);
// });

// // const points=[2,5,3,2,1,8];
// const newArr=points.map((value,index)=> (value +=5));
// console.log(newArr)

//  const points=[2,5,3,2,1,8];
//  const newArr=points.filter((value)=>value>2);
//  console.log(newArr);

//  const points=[2,5,3,2,1,8];
//  const newArr=points.find((value)=>value>2);
//  console.log(newArr);

//  const points=[2,5,3,2,1,8];
//  const newArr=points.find((value)=>value==2);
//  console.log(newArr);

 const points=[2,5,3,2,1,8];
 const newArr=points.reduce((sum,value)=>{
    return sum+value
},0);
 console.log(newArr);


