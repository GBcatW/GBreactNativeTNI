//create array of Person objects
var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry Kill", age: 35 }
];
//Function to filter people who are at least 30 years old
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
//Using the funvtion and logging the result
var adults = filterAdults(people);
console.log(adults);
