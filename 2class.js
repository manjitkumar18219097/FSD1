<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Marks System</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background: #f9f9f9;
    }

    h2 {
      text-align: center;
      color: #333;
    }

    table {
      width: 60%;
      margin: 20px auto;
      border-collapse: collapse;
      background: white;
    }

    table, th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }

    .controls {
      text-align: center;
      margin: 15px;
    }

    button {
      margin: 5px;
      padding: 8px 15px;
      cursor: pointer;
      border: none;
      background: #4CAF50;
      color: white;
      border-radius: 5px;
    }

    button:hover {
      background: #45a049;
    }

    .input-box {
      text-align: center;
      margin: 20px;
    }

    input {
      padding: 5px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <h2>📊 Student Marks System</h2>

  <!-- Table -->
  <table id="studentTable">
    <tr>
      <th>Name</th>
      <th>Marks</th>
    </tr>
  </table>

  <!-- Controls -->
  <div class="controls">
    <button onclick="showHighest()">Show Highest</button>
    <button onclick="showAverage()">Show Average</button>
    <button onclick="sortByMarks()">Sort by Marks</button>
    <button onclick="resetList()">Reset List</button>
  </div>

  <!-- Add student -->
  <div class="input-box">
    <input type="text" id="name" placeholder="Enter Name">
    <input type="number" id="marks" placeholder="Enter Marks">
    <button onclick="addStudent()">Add Student</button>
  </div>

  <script>
    let students = [
      { name: "Aman", marks: 78 },
      { name: "Priya", marks: 92 },
      { name: "Rahul", marks: 65 }
    ];

    function renderTable() {
      const table = document.getElementById("studentTable");
      table.innerHTML = "<tr><th>Name</th><th>Marks</th></tr>";
      students.forEach(s => {
        const row = `<tr><td>${s.name}</td><td>${s.marks}</td></tr>`;
        table.innerHTML += row;
      });
    }

    function addStudent() {
      const name = document.getElementById("name").value;
      const marks = parseInt(document.getElementById("marks").value);

      if (!name || isNaN(marks)) {
        return alert("Enter valid details!");
      }

      students.push({ name, marks });
      renderTable();

      document.getElementById("name").value = "";
      document.getElementById("marks").value = "";
    }

    function showHighest() {
      let maxMarks = Math.max(...students.map(s => s.marks));
      alert("Highest Marks: " + maxMarks);
    }

    function showAverage() {
      let avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
      alert("Average Marks: " + avg.toFixed(2));
    }

    function sortByMarks() {
      students.sort((a, b) => b.marks - a.marks);
      renderTable();
    }

    function resetList() {
      students = [];
      renderTable();
    }

    // Initial render
    renderTable();
  </script>
</body>
</html>
