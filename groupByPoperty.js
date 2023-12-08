// First argument is an array of objects
// Second argument is a property as string that is unique for every object in array
function groupByProperty(arr, prop){
    return arr.reduce( (obj, item) => {
        obj[item[prop]] = item;
        return obj;
    }, {});
}
// Returns an object with the value of prop as key and each object associated as value