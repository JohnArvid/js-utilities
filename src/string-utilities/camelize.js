export default function camelize(str) {
    let arr = str.split("-");
    arr = arr.map( (item, index) => {
        if (index === 0) return item;
        else item = item[0].toUpperCase() + item.slice(1);
        return item;
    });
    str = arr.join("");
    return str;
}