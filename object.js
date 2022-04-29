let cap={
    name:"Steve",
    lastname:"Rogers",
    address:{
        city:"Manhettan",
        state:"New York"
    },
    age:35,
    isAvenger:true,
    movies:["First Avenger","Winter Soldiers","Civil war"],
    sayhi:function(){
        console.log("Cap say hi")
    }
}
// console.log(cap.name);
// console.log(cap.lastname);
// console.log(cap.address);
// console.log(cap.age);
// console.log(cap.isAvenger);
// console.log(cap.movies[0]);
// console.log(cap.movies[1]);
// console.log(cap.movies[2]);
// cap.sayhi();
// console.log("Cap initially:",cap)
// cap.age=36
// cap.isAvenger=false
// cap.friends=["tony","bruce","peter"]
// delete cap.address
// console.log("Cap Finally:",cap)
// for(let k in cap)
// {
//     console.log(k,":",cap[k])
// }
console.log(cap.xyz)
console.log(cap["xyz"])