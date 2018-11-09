<?php


class Point {
  
  public $x = 0;
  public $y = 0;

  function create($x, $y) {
	  $this->x = $x;
    $this->y = $y;
  }
}

class SudokuGenerator {

  function blankSudoku() {
    // Create the sudoku array
    $sud = [9];

    for($i=0; $i<9; $i++) {
      $sud[$i] = [];
      for($j=0; $j<9; $j++) {
        $sud[$i][$j] = rand(1, 9);
      }
    }

    return $sud;
  }

  function generateSudoku() {
    while(true) {
      $sud = $this->_generateSudoku();

      if(is_array($sud)) {
        return $sud;
      }
    }
  }

  // That method is genereting sudoku in the sud array
  private function _generateSudoku() {
    // Create the sudoku array
    $sud = [9];

    for($i=0; $i<9; $i++) {
      $sud[$i] = [];
      for($j=0; $j<9; $j++) {
        $sud[$i][$j] = 0;
      }
    }

    /*
    * Vectors with all fields, where is possible to put there some value
    * for example: number 3 you can put in each field, that is in
    * the v[2] vector (counting from 0)
    */
    $v = [];

    // On begin all vectors are full (each contains all 81 fields that is in sudoku table)
    for($i=0; $i<9; $i++) {
      $v[$i] = $this->createHugeVector();
    }
    for($cur=0; $cur<9; $cur++) {
      for($i=0; $i<9; $i++) {
          if(count($v[$cur]) === 0) {
            // Cannot complete sudoku!
            return false;
          }
          $p = $this->getRandomPoint($v[$cur]);
          $sud[$p->x][$p->y] = $cur + 1;
          //echo 'x: ' . $p->x . ' y: ' . $p->y . '<br>'; 
          for($j=0; $j<9; $j++) {
            $this->removeField($v[$j], $p->x, $p->y);
          }
          $this->removeRow($v[$cur], $p->y);
          $this->removeColumn($v[$cur], $p->x);
          $this->removeSquare($v[$cur], $p->x, $p->y);
      }
    }

    // If sudoku has been generated successfully
    return $sud;
  }

  // That function returns us vector with all Points from sudoku Table
  function createHugeVector() {
    $v = [];
    for($xx=0; $xx<9; $xx++) {
      for($yy=0; $yy<9; $yy++) {
        $p = new Point;
        $p->create($xx, $yy);
        $v[$xx*9 + $yy] = $p;
      }
    }
    return $v;
  }

  // Remove field in specific position
  function removeField(& $v, $x, $y) {
    for($i=count($v)-1; $i>=0; $i--) {
      if($v[$i]->x == $x) {
        if($v[$i]->y == $y) {
          array_splice($v, $i, 1);
          return;
        }
      }
    }
  }

  // x, y are position of field (not square), that is in square for remove
  function removeSquare(& $v, $x, $y) {
    $startX = floor($x/3) * 3;
    $startY = floor($y/3) * 3;
    $toX = $startX+3;
    $toY = $startY+3;
    for($xx=$startX; $xx<$toX; $xx++) {
      for($yy=$startY; $yy<$toY; $yy++) {
        $this->removeField($v, $xx, $yy);
      }
    }
  }

  // Remove all fields with specific y
  function removeRow(& $v, $y) {
    for($i=count($v)-1; $i>=0; $i--) {
      if($v[$i]->y == $y) {
        array_splice($v, $i, 1);
      }
    }
  }

  // Remove all fields with specific x
  function removeColumn(& $v, $x) {
    for($i=count($v)-1; $i>=0; $i--) {
      if($v[$i]->x == $x) {
        array_splice($v, $i, 1);
      }
    }
  }

  // Returns random point from vector and NOT removing that!
  function getRandomPoint(& $v) { return $v[ random_int(0, count($v)-1) ]; } 
}

?>