let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott"
]

// Console.log a sub array containing only "J" names

// 8/10
let res = start.filter((name) => {
    return name[0] === "J";
})
console.log(res);

// Short but hard to think about 5/10
console.log(start.filter(name => name[0] === "J"))

// 3/10 legibility
let newArr = []
for (let i = 0; i < start.length; i++){
    if (start[i][0] === "J"){
        newArr.push(start[i]);
    }
}
console.log(newArr);

// Find the average of all the students' grades

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    }
]

// 1
let total = 0;
for (let student of students){
    console.log(student.grade);
    total += student.grade;
}
let average = total / students.length;
console.log(average);

// 2
let total2 = 0;
students.forEach(s => total2 += s.grade);
let average2 = total2 / students.length;
console.log(average2);

// 3
console.log(
    students.reduce((gpa, student) => gpa += student.grade, 0) / students.length
)

let result3 = [1, 2, 3]
    .map((x) => x * x)
    .reduce((totalVal, curValue) => totalVal += curValue, 0);

console.log(result3);