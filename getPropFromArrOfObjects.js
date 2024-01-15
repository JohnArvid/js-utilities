//First parameter is an array of objects - arr
//Second parameter is a property as string - prop
//Returns array of the property values of prop for each object in arr

export default function getPropFromArrOfObjects(arr, prop) {
    return arr.map( item => item[prop] );
}