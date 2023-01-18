// Exporting modules
console.log("working or not");
export const sports = "kabaddi";
export const list = [];
export const favPlayer = function (namefirst, namesecond) {
    list.push({ namefirst, namesecond });
    console.log(`${namefirst} and ${namesecond} is my favourite player`);
}
console.log("start fetching");
fetch('https://jsonplaceholder.typicode.com/posts');
console.log("ending the fetching");
// export { favPlayer as FP, sports ,list};
// default wla concept
// export default Fordefault = "defaultwala";
export default function (firstname, secondname) {
    list.push({ firstname, secondname });
    console.log(`${firstname} and ${secondname} are my favourite player`);
}