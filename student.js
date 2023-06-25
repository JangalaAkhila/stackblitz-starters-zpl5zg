const numUsers = parseInt(prompt("Enter the number of users:"));
const students = [];
for (let i = 1; i <= numUsers; i++) {
  const student = {
    name: prompt(`Enter name of student ${i}:`),
    dob: prompt(`Enter date of birth (DD-MM-YYYY) ${i}:`),
    biology: parseInt(prompt(`Enter biology marks for student ${i}:`)),
    chemistry: parseInt(prompt(`Enter chemistry marks for student ${i}:`)),
};
  
  students.push(student);
}
students.sort((a, b) => {
    if (a.chemistry+ a.biology > b.chemistry + b.biology) {
    return a; 
  }
  if (a.chemistry + a.biology < b.chemistry + b.biology) {
    return b;
  }
  if (a.biology > b.biology) {
    return a; 
  }
  if (a.biology < b.biology) {
    return b;
  }
  const [aDay, aMonth, aYear] = a.dateOfBirth.split("-");
  const [bDay, bMonth, bYear] = b.dateOfBirth.split("-");
  const aDate = new Date(`${aYear}-${aMonth}-${aDay}`);
  const bDate = new Date(`${bYear}-${bMonth}-${bDay}`);

  if (aDate < bDate) {
    return a; 
  }
  if (aDate > bDate) {
    return b; 
  }
  return 0; 
});
const names = students.map((student) => student.name).join(", ");
console.log(names)

