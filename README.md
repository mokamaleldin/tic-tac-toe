<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic-Tac-Toe Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      color: #333;
    }
    h1, h2, h3 {
      color: #0056b3;
    }
    code {
      background: #f4f4f4;
      padding: 2px 5px;
      border-radius: 3px;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    ul li::before {
      content: "•";
      color: #0056b3;
      font-weight: bold;
      display: inline-block; 
      width: 1em;
      margin-left: -1em;
    }
  </style>
</head>
<body>

<h1>Tic-Tac-Toe Game</h1>

<p>Welcome to the Tic-Tac-Toe game built with React and CSS!</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="introduction">Introduction</h2>
<p>Tic-Tac-Toe is a classic two-player game where players take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.</p>
<p>This project is a simple implementation of the Tic-Tac-Toe game using React for the user interface and CSS for styling.</p>

<h2 id="features">Features</h2>
<ul>
  <li><strong>Interactive Gameplay:</strong> Players can take turns and see their moves reflected immediately.</li>
  <li><strong>Winner Detection:</strong> The game detects when a player has won or if there is a draw.</li>
  <li><strong>Responsive Design:</strong> The game is responsive and works well on both desktop and mobile devices.</li>
  <li><strong>Reset Game:</strong> Players can easily reset the game to start over.</li>
</ul>

<h2 id="installation">Installation</h2>
<p>To get a local copy of the project up and running, follow these steps:</p>
<ol>
  <li><strong>Clone the repository:</strong></li>
  <pre><code>git clone https://github.com/mokamaleldin/tic-tac-toe.git
cd tic-tac-toe</code></pre>
  <li><strong>Install dependencies:</strong></li>
  <pre><code>npm install</code></pre>
  <li><strong>Start the development server:</strong></li>
  <pre><code>npm start</code></pre>
  <p>This will open the game in your default web browser at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>
</ol>

<h2 id="usage">Usage</h2>
<p>To play the game, open the app in your browser and start placing your marks (X or O) by clicking on the squares. The game will automatically detect the winner or if there's a draw. You can reset the game at any time by clicking the reset button.</p>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
  <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
  <li><strong>CSS:</strong> Cascading Style Sheets for styling the app.</li>
  <li><strong>JavaScript:</strong> The programming language used to create the game logic.</li>
</ul>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.</p>
<ol>
  <li><strong>Fork the repository</strong></li>
  <li><strong>Create your feature branch:</strong></li>
  <pre><code>git checkout -b feature/AmazingFeature</code></pre>
  <li><strong>Commit your changes:</strong></li>
  <pre><code>git commit -m 'Add some AmazingFeature'</code></pre>
  <li><strong>Push to the branch:</strong></li>
  <pre><code>git push origin feature/AmazingFeature</code></pre>
  <li><strong>Open a pull request</strong></li>
</ol>

<h2 id="license">License</h2>
<p>Distributed under the MIT License. See <code>LICENSE</code> for more information.</p>

<h2 id="contact">Contact</h2>
<ul>
  <li><strong>Your Name:</strong> <a href="mohamed.kamal.eliwa@gmail.com">mohamed kamalelidn</a></li>
  <li><strong>Project Link:</strong> <a href="https://github.com/mokamaleldin/tic-tac-toe" target="_blank">https://github.com/mokamaleldin/tic-tac-toe</a></li>
</ul>

</body>
</html>
