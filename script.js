console.log("---script 02-01---");
const vegetables=["Капуста","Репа","Редиска","Морковь"];
const text=vegetables.join("I");
console.log(text);


console.log("---script 02-02---")
let names = 'Вася, Петя, Вова, Олег';
let arr = names.split(', ');
console.log(arr);  ["Вася", "Петя", "Вова","Олег"]



console.log("---script 3-4---");
const fruits=['Яблоко', 'ананас','груша,'];
const fruitsInUpperCase=Array();
fruits.forEach(value =>{
  fruitsInUpperCase.push(value.toUpperCase())
})
console.log(fruitsInUpperCase)



  console.log('--- script 3-6---');
  function getSum(){
    var results=0;
    for (i =0;i< arguments.length;i++){
      results += arguments [i];
    }
    return results;
  }
  const sum= getSum(1,2,3,4);
  console.log(sum);

  console.log("---script 3-7---")
  const array =[1,"hello",2,3,4,5,6,7,null];
  const numberArray ={};
  array.forEach(item => {
    if(Number.isInteger (item)){
      numberArray.push (item)
      console.log('item = ${item}, sum=$ {sum}' );  
     }});
     console.log (numberArray);
     

     console.log("---script 03-08---");
     function arrayTesting(items){
       if (Array.isArray(items)){
         var found= items.find(x => x==true);
         return found
       }
     }
     const haveTrueValue = arrayTesting([0,false,null,1]);
     console.log(haveTrueValue);
     const dontHaveTrueValue = arrayTesting([0,false,null,0]);
     console.log (dontHaveTrueValue);

     console.log("---script 3-5---")
     function addOneForAll(){
       var result_array =[];
       for (i=0;i<arguments.length;i++){
         result_array[i] = arguments[i]+1;
       }
       return result_array;
     }
     const va1=addOneForAll(1,2,3,4);
     console.log(va1);

