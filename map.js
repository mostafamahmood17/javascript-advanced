const flim = [
    {name : "razi" , duration : 2},
    {name : "raziOne" , duration : 3},
    {name : "raziTwo" , duration : 4},
    {name : "raziThree" , duration : 5}
];
// const flimName = [];
// for(let i = 0; i<flim.length; i++){
//     const element = flim[i];
//     flimName.push(element.name);
//     console.log(flimName);
// }
const names = flim.map(flims => flims.name);
const durations = flim.map(d => d.duration);
console.log(names);
console.log(durations);
const bigger = flim.filter(s => s.duration>3);
console.log(bigger);
const biggers = flim.find(s => s.duration>3);
console.log(biggers);
   
