/*
//In case either input is 1
if (num1===1 || num2===1)
  return 1
//isPrime function cut and paste from interwebs... coderbye seems to have lost my successfull version of this. I'll rewrite it soon enough
function isPrime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}

//prime factorization function
function pFact(num, pFactors){

//create an array of first few prime #'s this is probably the most inefficient part of the function and as I'm typing this comment I'm realizing how I can easily fix this...
var primeArray=[];
for (var count=0; count<500;count++){
    if (isPrime(count)===true)
      primeArray.push(count);
      }

//creates an empty array for list of prime factors if there is none input
if (pFactors===undefined)
  pFactors=[];

//ending condition to recursion... if the number input into the function is prime, add that number to the prime factors array and return the prime factors array  
if (isPrime(num)===true){
  pFactors.push(num)
  return pFactors
}
//check each prime number starting with smallest to find the smallest prime factor
for (var count=0; primeArray[count]<=num; count++){
  if (num%primeArray[count]===0){   //prime factor found
    pFactors.push(primeArray[count]);//add prime factor to prime factor array
    num=num/primeArray[count];//divide the input number by the prime factor to get new input number
    return pFact(num, pFactors); //rerun fucntion with new input number and prime factors list.
    }
}
}
//function to determine overlap of prime factors
function intersect(arr1, arr2){
var results=[];
for (var count=0; count<arr1.length;count++){
  if (arr2.indexOf(arr1[count])>-1){
    results.push(arr1[count]);
arr2.splice(arr2.indexOf(arr1[count]),1)
  }
}
return results;
} 

var GCF = intersect(pFact(num1),pFact(num2));
if (GCF.length===0) //if no common prime factors, GCF must be 1
  return 1
var result=GCF[0];
for (var count=1; count<GCF.length; count++)
result=result*GCF[count]//multiply all prime factors to reach GCF
return result
//Boners
         
}
   
console.log(Division(36,54)  )
*/