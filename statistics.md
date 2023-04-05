<!DOCTYPE html>
<html>
  <head>
    <title>Settings</title>
    <script>
      //  completed questions data and labels for the chart
      var completedQuestionsData = [4, 2, 3, 6, 8, 5, 7];
      var completedQuestionsLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      //   courses data and labels for the chart
      var pendingCoursesData = [2, 1, 3, 0, 1, 2, 1];
      var pendingCoursesLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      //filler for now
      //  chart for completed questions
      var completedQuestionsChart = new Chart(document.getElementById("completed-questions-chart"), {
        type: "line",
        data: {
          labels: completedQuestionsLabels,
          datasets: [
            {
              label: "Completed Questions",
              data: completedQuestionsData,
              borderColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Completed Questions per Day"
          }
        }
      });
      // chart for pending courses
      var pendingCoursesChart = new Chart(document.getElementById("pending-courses-chart"), {
        type: "bar",
        data: {
          labels: pendingCoursesLabels,
          datasets: [
            {
              label: "Pending Courses",
              data: pendingCoursesData,
              backgroundColor: "#8e5ea2"
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Pending Courses"
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    </script>
  </head>
  <body>
    <h1>Settings</h1>
    <p>Here you can update your account settings.</p>
    <h2>User Information</h2>
    <p>Username: <span id="username"></span></p>
    <p>Email: <span id="email"></span></p>
    <p>Password: <span id="password"></span></p>
    <h2>Charts</h2>
    <h3>Completed Questions per Day</h3>
    <canvas id="completed-questions-chart"></canvas>
    <h3>Pending Courses</h3>
    <canvas id="pending-courses-chart"></canvas>
  </body>
</html>
