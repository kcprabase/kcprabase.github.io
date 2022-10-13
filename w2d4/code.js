//Exercise 1:
String.prototype.filter = function (arr) {
    return this.split(" ")
        .filter((x) => !arr.includes(x))
        .join(" ");
}


//Exercise 2:
Array.prototype.bubbleSort = function () {
    const arr = this;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

//Exercise 3:
let Person = function (name, age){
    this.name = name;
    this.age = age;
};

let Teacher = function(name, age){
    Person.call(this, name, age);
};
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(student){
    return `${this.name} is now teaching ${student}`;
}

console.log("Creating teacher with Name: Carl Sagan, Age: 70");
const teacher = new Teacher("Carl Sagan", "70");
console.log("Adding student for him to teach. Student name: Prabesh K C");
console.log(teacher.teach("Prabesh K C"));