document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert('Sign up successful!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  });
  