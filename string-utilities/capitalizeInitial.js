export default function capitalizeInitial(str) {
    if (!str) return str;

    str = str[0].toUpperCase() + str.slice(1);
    return str;
}