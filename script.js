let array = [2,4,9,10,45,67,8,90]
let arrayNawe = []

console.log(array);
console.log(array[4]);

for (let i=0; i<array.length; i++){
    if (array[i]%2==0){
        console.log(array[i]);
        arrayNawe.push(array[i])
        
    }
}

console.log(arrayNawe);