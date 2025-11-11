// For The Course Listing Page
const courseTable = document.getElementById("staffTable");

(() => {
    fetch("data/course-list.json")
  .then((response) => response.json())
  .then((data) => {
    //...
    console.dir(data)
    data.forEach((item) => {
        const row = document.createElement("tr");
        const courseTitleCell = document.createElement("td");
        const courseTypeCell = document.createElement("td");
        const courseSummaryCell = document.createElement("td");
        courseTitleCell.textContent = item.courseTitle;
        courseTypeCell.textContent = item.courseType;
        courseSummaryCell.textContent = item.courseSummary;
        row.appendChild(courseTitleCell);
        row.appendChild(courseTypeCell);
        row.appendChild(courseSummaryCell);
        courseTable.appendChild(row);
      
        // ...
      });
  })
})();