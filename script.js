

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

    arr.map((developer) => {
        if (developer.profession === "developer") {
            console.log(developer)
        }
    })
    //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {

    arr.forEach((developer) => {
        if (developer.profession === "developer") {
            console.log(developer)
        }
    })
    //Write your code here , just console.log
}

function addData() {
    const newdata = {
        id: 4, name: "susan", age: "20", profession: "intern"
    }

    const finaldata = arr.push(newdata)
    console.log(arr)
    //Write your code here, just console.log
}

function removeAdmin() {

    arr.filter((developer) => {
        if (developer.profession != "admin") {
            console.log(developer)
        }
    })
    //Write your code here, just console.log
}

function concatenateArray() {

    const newconcat = [
        { id: 5, name: "ayush bansal", age: "26", profession: "frontend export" },
        { id: 6, name: "aravind", age: "25", profession: "dsa expert" },
        { id: 7, name: "manish", age: "25", profession: "student" },
    ]

    const newsign = arr.concat(newconcat)
    console.log(newsign)
    //Write your code here, just console.log
}