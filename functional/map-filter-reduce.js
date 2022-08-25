const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
];

const getScore = el => el.score;
const greatStudent = el => el.score >= 8.5;
const avg = (acc, elem, i, array) => {
    if (i === (array.length - 1)) {
        return (acc + elem) / array.length;
    } else {
        return acc + elem;
    }
}

//Filter, map & reduce
console.log(
    students
        .filter(el => el.score >= 9.0)
        .map(el => el.score)
        .reduce(avg)
);