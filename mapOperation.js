//Map is a collection of elements where each element is stored as a Key, value pair.

1.
//create a empty map
const map={}

2.
//add value of each eleemnt(key)
let array1 = [1, 3, 4, 5, 5, 7];

map = {};
for (let i = 0; i <= array1.length - 1; i++) {
  let val = map[array1[i]];
  if (val == undefined)map[array1[i]] = 1;
  else map[array1[i]] =val+1;
}

3.
//delete element(key) from map
delete map[key]

4. 
//size of map
Object.keys(map).length

5.
//lookup value in map
let val = map[array1[i]];
if (val == undefined) {
  map[array1[i]] = 1;
}



//********ES6 JS MAP
1. 
//Create a Map 
new Map([it])

// Parameter:
// it - It is any iterable object(or array) whose values are stored as key, value pair,
//      If the parameter is not specified then a new map is created is Empty
// Returns:
//      A new Map object

2. 
// "size": It returns the number of elements or the key-value pairs in the map.
 Map.size

 3. 
//   Map..set() – It adds the key and value to the Map Object. 

 Syntax: 
 Map.set(k, v);
 
//  Parameters:
//  k - Key of the element to be added to the Map
//  v - value of the element to be added to the Map
 
//  Returns:
//  It returns a Map object


4. 
// Map.has() – It return a boolean value depending on whether the specified key is present or not.

Syntax: 
Map.has(k);

// Parameters:
// k - Key of the element to checked 

// Returns:
// true if the element with the specified key is present 
// or else returns false. 

5.
//  Map.get() – It returns the value of the corresponding key.

Syntax: 
Map.get(k);

// Parameters:
// k - Key, whose value is to be returned

// Returns:
// The value associated with the key, if it is present 
// in Map, otherwise returns undefined

6. 
// Map.delete() – It delete’s both the key as well as a value from the map. 

Syntax: 
Map.delete(k);

// Parameters:
// k - Key which is to be deleted from the map 

// Returns:
// true if the value is found and deleted from 
// the map otherwise, it returns false

7.
// Map.clear() – Removes all the elements from the Map object.

Syntax: 
Map.clear();

// Parameters:
// No parameters

// Returns:
// undefined

8.
// Map.entries() – It returns an iterator object that contains key/value pair for each element present in the Map object. 

Syntax: 
Map.entries();

// Parameters:
// No parameters

// Returns:
// It returns an iterator object 

9.
// Map.keys() – It returns an iterator object which contains all the keys present in the Map Object. 

Syntax: 
Map.keys();

// Parameters:
// No parameter

// Returns:
// An iterator object 

10.
// Map.values() – It returns an iterator object which contains all the values present in the Map Object. 

Syntax: 
Map.values();

// Parameters:
// No parameter

// Returns: 
// An iterator object 

11.
// Map.forEach() – It executes the callback function once for each key/value pair in the Map, in the insertion order. 

Syntax: 
Map.forEach(callback,  [thisArgument]);

// Parameters:
// callback - It is a function that is to be executed for each element of the Map.
// thisargument - Value to be used as this when executing the callback.

// Returns:
// undefined
// The callback function is provided with three parameters as follows: 

// the element key
// the element value
// the Map object to be traversed

12.
//  Map used to iterate over arrays

Syntax:
arr.map(function(value,index){})

// Parameters: 
// value = array element
//            index = index of array
           
// Return:
// Modified value of elements