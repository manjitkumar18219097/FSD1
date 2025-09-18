// Sample data
let students = [
  { name: "Amit", marks: 85 },
  { name: "Sneha", marks: 92 },
  { name: "Ravi", marks: 78 }
];

// Build table
function loadTable() {
  const table = document.getElementById("studentTable");
  table.innerHTML = "<tr><th>Name</th><th>Marks</th></tr>";
  students.forEach(s => {
    table.innerHTML += `<tr><td>${s.name}</td><td>${s.marks}</td></tr>`;
  });
}

// Highest marks
function showHighest() {
  let top = students.reduce((a, b) => (a.marks > b.marks ? a : b));
  alert(`Highest: ${top.name} (${top.marks})`);
}

// Average marks
function showAverage() {
  let sum = students.reduce((t, s) => t + s.marks, 0);
  alert("Average: " + (sum / students.length).toFixed(2));
}

// Sort by marks
function sortByMarks() {
  students.sort((a, b) => b.marks - a.marks);
  loadTable();
}

// Reset sample
function resetSample() {
  students = [
    { name: "Amit", marks: 85 },
    { name: "Sneha", marks: 92 },
    { name: "Ravi", marks: 78 }
  ];
  loadTable();
}

// Remove last
function removeLast() {
  students.pop();
  loadTable();
}

// Add student
function addStudent() {
  let name = document.getElementById("nameInput").value;
  let marks = parseInt(document.getElementById("marksInput").value);
  if (!name || isNaN(marks)) {
    alert("Enter valid Name and Marks");
    return;
  }
  students.push({ name, marks });
  loadTable();
  document.getElementById("nameInput").value = "";
  document.getElementById("marksInput").value = "";
}

// Load at start
window.onload = loadTable;
 