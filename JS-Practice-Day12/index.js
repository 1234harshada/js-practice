// this
const person = {
  name: "Harshada",
  city: "Mumbai",
  introduce: function () {
    console.log("Name:", this.name);
    console.log("City:", this.city);
  },
};
person.introduce();




// constructor function
function Employee(name, id, department) {
  this.name = name;
  this.id = id;
  this.department = department;
}

const emp1 = new Employee("Kajal", 101, "Sales");
console.log(emp1.name, emp1.id, emp1.department);

const emp2 = new Employee("Punam", 102, "HR");
console.log(emp2.name, emp2.id, emp2.department);




// class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    console.log('${this.title} is written by ${this.author}');
  }
}

const book1 = new Book("Wings of Fire", "A.P.J. Abdul Kalam");
book1.describe();




// try catch finally
try {
  let a = 5;
  let b = a.toUpperCase(); // error
} catch (err) {
  console.log("Caught an error:", err.message);
} finally {
  console.log("This runs no matter what.");
}




// async await
function simulateAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

async function getData() {
  try {
    const result = await simulateAPI();
    console.log(result);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getData();