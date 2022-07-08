/* const promise = new Promise(function (resolve, reject) {
  resolve("hey!!");
  reject("pailas my dog :(");
}, reject);
 */
/* MAS EFICIENTE  */

const cows = 15;

const countCows= new Promise(function(resolve,reject){
    if(cows>10){
        resolve(`we have ${cows} cows on the farm`);
    }else{
        reject(`There is no cows on the farm`)
    }
})

countCows.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{console.log("finally")});