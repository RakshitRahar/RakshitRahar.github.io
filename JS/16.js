//promise

// const f1=()=>{
//     setTimeout(()=>{
//         return 5;
//     },1000);
    
// };
// const f2=(x)=>{
//     console.log(x+6);
// };
// const n=f1()
// f2(n)

// const f1=()=>{
    
//         return new Promise((resolve,reject)=>{
//             resolve(5);
//     });
    
// };
// const f2=(x)=>{
//     console.log(x+6);
// };
// f1().then((n)=>f2(n));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     data.map((value) => {
//       console.log(value.name);
//     });
//   });

  const fetchData=()=>{
    const res=fetch("https://jsonplaceholder.typicode.com/users")
    const data=res.json();
    data.forEach((value)=>{
        console.log(value.name);
    });
  }
  fetchData( )