console.log("---script 3-1---");
var number =4;
var result =0;
for(var i=1; i <=number;i++){
  result += i** 2;
  console.info ('$ {i} ** 2 =$ {results}')
}
console.info('Resalt=${rezalt}');


console.log('---script 3-2  ---');
var numbers = [3,5,12,9,23,93,17];
var filtered_numbers = [];
var sum1=0;

numbers.forEach(item=>{
  if (2< item && item <20){
    filtered_numbers.push(item);
    sum1 +=item;
    console.log('item=${item}, sum1=$(sum1)')
  }
});


console.log('---script 03-04---');
function addProperty (key,value,object){
  if (object.hasOwnProperty (key)){
    console.log ('Уже есть');
  }
object [key]=value;
}
var obj ={
    name:'Artur'
};
addProperty ('name',"Artur",obj);
addProperty('age',36,obj);

console.log ('---03-05---');
for (var i=1;i<=10;i++){
  if (i % 3==0){
    console.log ('FizBuz');
  }
  else if (i %2==0){
    console.log ('Fiz');
  } else if (i%2 !=0){
    console.log ('Buz');
  }
}

console.log('---script 03-06---');

function factorial (arg){
  var result=1;
  for (let i=1; i<=arg; i++){
    result=result * 1;
  }
  return result;
}
var n =factorial(7);
console.log(n);


console.log ('---script 03-03---')
var matrix =[[1,6,3,'6'], [10,15,13,'10']];
var sum2 =0 ;
matrix.forEash (
  collection =>{

    if (Array.isArray (collection)){

      collection.forEach(item =>{
        if (!isNan (item) && item %2 == 0){
          var number=Number.isInteger(item)?item: Number(item);
          sun2 +=number;
          console.log ('item = $ {item}, sum2 =$ {sum2}');
        }
      });
    }
    else{
      console.log('collection is not an array');
    }
  }
);
console.log ('Sum= ${sum}');






