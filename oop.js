class Person{
    firstName;
    lastName;
    age;
    career;

    constructor(firstName, lastName, age, career){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.career = career;
    }
    sayHello(){
        console.log("Hello " + this.firstName + " " + this.lastName + " " +
        this.age + " years old and " + this.career + " is your career choice.");
    }
}


class Student extends Person{
    // polymorphism
    grade;
    form;
    fees;
    feeBalance = 50000;
    constructor(firstName, lastName, age, career, grade, form, fees){
        super(firstName, lastName, age, career);
        this.grade = grade;
        this.form = form;
        this.fees = fees;
    }

    checkStudentFess(){
        console.log(this.fees);
    }

    getFees(){
        return this.fees;
    }
// abstraction
    printFeeMessage(FeeBalance){
        return `The balance of ${this.firstName} ${this.lastName} is ${this.feeBalance}`
    }
    payFees(){
        this.feeBalance = this.feeBalance - this.fees;
        return this.printFeeMessage(this.feeBalance);
    }
    // overriding
    sayHello(){
        console.log("Hi....");
    }
}

// creating instances
const person1 = new Person("Brian", "Mbugua", 23, "Developer");
const student1 = new Student("Grace", "Nyambura", 22, "Software Engineer", "B+", "3A", 30000);
// student1.checkStudentFess();
student1.sayHello();
console.log(student1.payFees());

