//JSON iterate over all loop
//for 
const name=["Adam","Jon","Sree","priya"];
for(let i=0;i< name.length;i++);
console.log(i,name[i]);

//for in
const dailyRoutine = ["wake up","Exercise","Eat","Office"];
 for(let routine in dailyRoutine){
    console.log(dailyRoutine[routine]);
 }

 //for of
 const dailyRoutine =  ["wake up","Exercise","Eat","Office"];
 for(let routine of dailyRoutine){
 console.log(routine);
 }

 //for each
 const dailyRoutine =  ["wake up","Exercise","Eat","Office"];
 dailyRoutine.forEach(function(routine){
    console.log(routine);
 });