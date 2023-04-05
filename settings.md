<!DOCTYPE html>
<html>
  <head>
    <title>Settings</title>
    <script>
      var user = {
        username: "filler",
        email: "filler@example.com",
        password: "********"
      };
      // Display user information in HTML elements
      window.onload = function() {
        document.getElementById("username").innerHTML = user.username;
        document.getElementById("email").innerHTML = user.email;
        document.getElementById("password").innerHTML = user.password;
      }
    </script>
  </head>
  <body>
    <h1>Settings</h1>
    <p>Here you can update your account settings.</p>
    <h2>User Information</h2>
    <p>Username: <span id="username"></span></p>
    <p>Email: <span id="email"></span></p>
    <p>Password: <span id="password"></span></p>
    <h2>FAQ</h2>
    <h3>Q: How do I update my password?</h3>
    <p>A: To update your password, go to the Password section and click on the "Change Password" button.</p>
    <h3>Q: How do I update my email address?</h3>
    <p>A: To update your email address, go to the Email section and click on the "Change Email" button.</p>
  </body>
</html>
