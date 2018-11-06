<?php


class Point {
  function create($x, $y) {
	$this->x = $x;
	$this->y = $y;
  }
}

class SudokuGenerator {

  // That method is genereting sudoku in the sud array
  function generateSudoku($sud) {
    /*
    * Vectors with all fields, where is possible to put there some value
    * for example: number 3 you can put in each field, that is in
    * the v[2] vector (counting from 0)
    */
    $v = [];

    // On begin all vectors are full (each contains all 81 fields that is in sudoku table)
    for($i=0; $i<9; $i++) {
      $v[$this->createHugeVector()];
    }
    for($cur=0; $cur<9; $cur++) {
      for($i=0; $i<9; $i++) {
          if(count($v[$cur]) === 0) {
            // Cannot complete sudoku!
            return false;
          }
          $p = $this.getRandomPoint($v[$cur]);
          $sud[$p->x][$p->y] = $cur + 1;
          for($j=0; $j<9; $j++) {
            this.removeField(v[j], $p->x, $p->y);
          }
          $this->removeRow($v[$cur], $p.y);
          $this->removeColumn($v[$cur], $p->x);
          $this->removeSquare($v[$cur], $p->x, $p->y);
      }
    }

    // If sudoku has been generated successfully
    return true;
  }

  // That function returns us vector with all Points from sudoku Table
  function createHugeVector() {
    $v = [];
    for($xx=0; $xx<9; $xx++) {
      for($yy=0; $yy<9; $yy++) {
        $p = new Point($xx, $yy);
        $v[$p];
      }
    }
    return $v;
  }

  // Remove field in specific position
  function removeField($v, $x, $y) {
    for($i=count($v)-1; $i>=0; $i--) {
      if($v[$i]->x == $x) {
        if($v[i]->y == $y) {
          array_splice($v, $i, 1);
          return;
        }
      }
    }
  }

  // x, y are position of field (not square), that is in square for remove
  function removeSquare($v, $x, $y) {
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
  function removeRow($v, $y) {
    for($i=count($v)-1; $i>=0; $i--) {
      if($v[$i]->y == $y) {
        array_splice($v, $i, 1);
      }
    }
  }

  // Remove all fields with specific x
  function removeColumn($v, $x) {
    for($i=count($v)-1; $i>=0; $i--) {
      if($v[i]->x == $x) {
        array_splice($v, $i, 1);
      }
    }
  }

  // Returns random point from vector and NOT removing that!
  function getRandomPoint($v) { return $v[ rand(count($v)) ]; } 
}

?>