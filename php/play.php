<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Sudoku</title>
  <style>
    html {
      font-size: 1px;
    }
    body {
      margin: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #666666;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18rem;
    }
    h1 {
      color: #f2d35c;
      font-size: 50rem;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .btn-container {
      width: 600px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      padding: 30px 0;
      background-color: #555555;
      border: 1px solid #aaaaaa;
    }
    .btn-container .btn {
      padding: 8px 20px;
      font-size: 20rem;
      color: #323232;
      background-color: #f2d35c;
      border: 1px solid #323232;
      transition: .3s;
    }
    .btn-container .btn:hover {
      cursor: pointer;
      box-shadow: 0 2px 6px 0 #323232;
      transform: scale(1.05);
    }
    .p5Canvas {
      border: 1px solid #aaaaaa;
    }
    .wrap {
      display: flex;
      flex-direction: column;
      transition: .5s;
    }
    footer a {
      color: #043775;
      text-decoration: none;
      letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <h1>Sudoku</h1>
  
  
  <?php
    require_once 'sudgen.php';
    
    $grid = [1, 2, 3, 4, 5, 6, 7, 8];
  
    array_splice($grid, 5, 1);
    
    print_r($grid);
  
  ?>
  
    
    
    
    
    
    
    
    
    
    
    
<!--
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script>
  <script src="play.js"></script>
  <script src="Sudoku.js"></script>
-->
</body>
</html>