import CustomUseEffect from "./hooks/CustomUseEffect"
let notes = `
1) useEffect hook also has a clean up function, 
The clean up function is called when , 
the component changes, 

clean up function called previos destroyed , 
then new one is made 

CHATGPT 
If your effect sets up an interval or attaches an event listener, you don't want multiple intervals or 
listeners stacking up each time the effect runs. So, before React re-runs the effect, it will first "clean up" 
the previous effect by stopping the interval or removing the event listener.

---------------------------
CLEAN UP RUNS WHEN DEPENDENCY ARRAT CHANGES OR THE COMPONENT GET UNMOUNTED 

we cannot replicate the unmount because it is something which react do under the hood by
fibre tree lgorithm and a process called reconciliation which manages component lif ecycle 
including handling effect and cleanup during unmounting  

// we can implemetn is invoking clean up pfunction when dependdecy array changes 




2) Meaning of "Polyfill":
A polyfill is a piece of code (usually JavaScript) that provides functionality that is not natively 
available in older browsers or environments. It "fills in" the gaps in functionality so that features from 
newer versions of JavaScript or web APIs work in older browsers that don't support them.

For example:

If you're using a method like Array.prototype.includes() (which was introduced in ECMAScript 2016), 
older browsers like Internet Explorer don't support it. A polyfill would be a custom function that mimics 
the behavior of includes() for those older browsers.


Example of a Polyfill:
A simple polyfill for Array.prototype.includes() might look like this:

js
Copy code
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex) {
    return this.indexOf(searchElement, fromIndex) !== -1;
  };
}
This code checks if includes() exists on arrays. If it doesn’t, it defines a custom implementation using indexOf().


3) 
can use this to check if the content of 2 arrays are equal or not 
const arr1 = [1,2]
const arr2 = [1,2] ; 
const arr3 =  [2,1] ; 
console.log( JSON.stringify(arr1) === JSON.stringify(arr2) ) ;  //true 

console.log( JSON.stringify(arr1) === JSON.stringify(arr3))  //false
`