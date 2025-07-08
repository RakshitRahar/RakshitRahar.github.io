db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,department:1}},
    {$sort:{salary:1}},
    {$limit:3},
])

///////////////////////////////////////////////////

//         }
//     }
// ])

/////////////////////////////////////////////////
db.employees.aggregate([
    {$project:{
        _id:0,name:1,
        salary:1,
        bonus:{$multiply:["$salary",2]}
    }}
]);

/////////////////////////////////////////////////
db.employees.aggregate([
    {$project:{
        _id:0,name:1,salary:1,email:1
    }}
    
])